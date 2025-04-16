# Discord Music Bot

A fully functional music bot for Discord built with Node.js, leveraging the Discord.js library for interacting with the Discord API and `yt-dlp` for fetching audio streams from various sources.

## Features

- **Play Music**: Play music from various sources, including YouTube, by invoking simple commands.
- **Queue Management**: Manage a queue of songs, allowing users to add multiple songs that can be played sequentially.
- **Loop Functionality**: Toggle looping for the currently playing song or the entire queue, making it easy to replay tracks.
- **Discord Voice Integration**: Join voice channels and play music directly to users in the channel.
- **Socks5 Proxy Support**: Stream music through a proxy server to bypass regional restrictions and improve performance.

## Commands

- **?play [url]**: Play the specified song. This can be a song name, YouTube URL, or Spotify URL.
- **?loop**: Toggle looping for the current song that is playing. *(Note: This feature may still have bugs.)*
- **More commands coming soon, stay tuned!**

## Installation

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Step 1: Clone the Repository

Open your terminal and run:
`git clone https://github.com/hw630590/discord-music-bot.git`
`cd discord-music-bot`

### Step 2: Install YT-DLP

You can install `yt-dlp` using one of the following methods:

#### Method 1: Using pip (easiest way)

If you have Python installed, run:
`pip install yt-dlp`

#### Method 2: Download the binary directly

- **Using wget**:
`wget https://github.com/yt-dlp/yt-dlp/releases/download/2025.03.31/yt-dlp_linux`

- **Using curl**:
`curl -LO https://github.com/yt-dlp/yt-dlp/releases/download/2025.03.31/yt-dlp_linux`

### Step 3: Move the yt-dlp binary

After downloading, ensure the binary is executable and then move it to the project directory:
`chmod +x yt-dlp_linux`
`sudo mv yt-dlp_linux ./discord-music-bot/`

### Step 4: Verify yt-dlp Installation

Check if **yt-dlp** is in the correct directory:
`ls ./discord-music-bot`

You should see **yt-dlp_linux** listed.

### Step 5: Install Node Packages

Install the required Node.js packages for the bot:
`npm install discord.js @discordjs/voice @discordjs/opus play-dl ffmpeg-static`

### Step 6: Start the Bot

If you are using a hosting panel like Pterodactyl or Prism with a preset start command, you can skip this step. Otherwise, start the bot by running:
`node index.js`

## Troubleshooting

- If you encounter issues starting the bot, ensure all dependencies are installed and **yt-dlp_linux** is accessible in the project directory.
- Check the console output for any error messages for further troubleshooting.

## Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request with improvements or bug fixes.
