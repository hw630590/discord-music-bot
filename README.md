# Discord Music Bot

A fully functional music bot for Discord built with Node.js, leveraging the Discord.js library for interacting with the Discord API and Yt-dlp for fetching audio streams from various sources.

## Features

- **Play Music**: Play music from various sources, including YouTube, by invoking simple commands.
- **Queue Management**: Manage a queue of songs, allowing users to add multiple songs that can be played sequentially.
- **Loop Functionality**: Toggle looping for the currently playing song or the entire queue, making it easy to replay tracks.
- **Discord Voice Integration**: Join voice channels and play music directly to users in the channel.
- **Socks5 Proxy Support**: Stream music through a proxy server to bypass regional restrictions and improve performance.

## Commands
- **?play [url]**: This can be a song name, YouTube URL, or Spotify URL.
- **?loop**: This can be used to loop the current song that is playing. (not fully finished, expect bugs)
- **More commands coming soon, stay tuned!**

## Installation

## How to install YT-DLP
*Method 1:* (mainly VPSes)
- `pip install yt-dlp (easiest)`


### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Clone the Repository

```bash
git clone https://github.com/hw630590/discord-music-bot.git
cd discord-music-bot
```

**IMPORTANT STEP!** (if you don't do this, you may experience issues)
```bash
chmod +x yt-dlp_linux
```

**YT-DLP installations:**
Method 1: `pip install yt-dlp` (easiest)

Method 2: (harder)
**WGet (aka winget)**
- `wget https://github.com/yt-dlp/yt-dlp/releases/download/2025.03.31/yt-dlp_linux`

**CURL**
- `curl -LO https://github.com/yt-dlp/yt-dlp/releases/download/2025.03.31/yt-dlp_linux`

Then, follow these steps:
- `sudo mv yt-dlp_linux ./discord-music-bot` (**adjust the directory accordingly**)

### Check if yt-dlp_linux is installed

(adjust the directory accordingly)

```bash
ls ./discord-music-bot
```

### Install Packages (~150mb)

```bash
npm install discord.js @discordjs/voice @discordjs/opus play-dl ffmpeg-static
```

### Start the bot
(pterodactyl, prism, or any dash/panel WITH a pre-start command can skip this step)

```bash
node index.js
```
