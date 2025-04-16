const { spawn } = require('child_process');
const { Readable } = require('stream');
const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
  entersState,
  VoiceConnectionStatus,
  StreamType,
} = require('@discordjs/voice');

const queueManager = require('./queueManager'); // Ensure you have this defined
const queue = new Map(); // This will store the song queue for each guild
const proxy = 'socks5://199.116.112.6:4145'; // Replace with your proxy (example proxy placed in) [u can use http://, socks4:// or socks5://

module.exports = {
  name: 'play',
  description: 'Plays a song using yt-dlp and proxy (no ffmpeg).',
  queue, // Export the queue along with other properties
  
  async execute(message, args) {
    const query = args.join(' ');
    if (!query) {
      return message.reply('❌ Provide a song name or URL.');
    }

    const vc = message.member.voice.channel;
    if (!vc) {
      return message.reply('❌ Join a voice channel first.');
    }

    // Get or create the song queue for the guild
    const serverQueue = queue.get(message.guild.id) || { songs: [], connection: null, player: null, loop: false };

    // Add the new song to the queue
    serverQueue.songs.push(query);

    // Update the queue using the queueManager
    queueManager.setQueue(message.guild.id, serverQueue);

    // If the player is not already playing, start playing
    if (!serverQueue.player) {
      const connection = joinVoiceChannel({
        channelId: vc.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
      });

      const player = createAudioPlayer();
      serverQueue.player = player;
      serverQueue.connection = connection;
      connection.subscribe(player);

      await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
      message.reply('⏳ Now loading the song, this may take a few seconds...');

      // Pass the message object to playSong with isInitialPlay set to true
      this.playSong(message, message.guild, serverQueue, true);
    } else {
      message.reply('🎶 Your song has been added to the queue!');
    }
  },

  async playSong(message, guild, serverQueue, isInitialPlay = false) {
    const query = serverQueue.songs.shift(); // Get the first song in the queue

    if (!query) {
      serverQueue.connection.destroy();
      queue.delete(guild.id);
      return;
    }

    // Setup the audio stream using yt-dlp
    const stream = await this.getStreamFromYtDlp(query);
    const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });

    const player = serverQueue.player;
    player.play(resource);

    await entersState(player, AudioPlayerStatus.Playing, 30e3);

    // Send the "Now playing your song!" message only if it's the initial play command
    if (isInitialPlay) {
      message.reply('🎶 Now playing your song!');
    }

    player.on(AudioPlayerStatus.Idle, () => {
      if (serverQueue.loop) {
        // If looping, add the song back to the front of the queue
        serverQueue.songs.unshift(query); // Add it back to the front of the queue
      }
      // Play the next song in the queue
      this.playSong(message, guild, serverQueue); // Call playSong again, without the initial play flag
    });
  },

  async getStreamFromYtDlp(query) {
    // This function returns the Readable stream from yt-dlp
    const ytDlp = spawn('./yt-dlp_linux', [
      '-f', 'bestaudio[ext=webm][acodec=opus]',
      '--proxy', proxy,
      '-o', '-', // pipe to stdout
      query,
    ]);
    
    ytDlp.stderr.on('data', (data) => {
      console.error(`yt-dlp error: ${data}`);
    });
    
    ytDlp.on('error', (error) => {
      console.error(`yt-dlp failed: ${error.message}`);
    });

    return Readable.from(ytDlp.stdout);
  }
};
