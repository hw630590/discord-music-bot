const { queue } = require('./play'); // Adjust path based on your file structure
const queueManager = require('./queueManager'); // Ensure this path is correct
const { AudioPlayerStatus } = require('@discordjs/voice'); // This import is needed for checking the player's state

module.exports = {
    name: 'loop',
    description: 'Toggles looping the currently playing song.',
    async execute(message) {
        const serverQueue = queueManager.getQueue(message.guild.id);

        // Check if the queue exists
        if (!serverQueue || !serverQueue.player) {
            return message.reply('❌ There\'s nothing playing to loop.');
        }

        // Check if the player is currently playing a song
        if (serverQueue.player.state.status === AudioPlayerStatus.Playing) {
            // Toggle the loop state
            serverQueue.loop = !serverQueue.loop;
            const loopStatus = serverQueue.loop ? 'enabled' : 'disabled';
            message.reply(`🔁 Looping is now **${loopStatus}**.`);
        } else {
            // If the player is idle, notify that there's nothing playing
            return message.reply('❌ There\'s nothing playing to loop.');
        }
    }
};
