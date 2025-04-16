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

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Clone the Repository

```bash
git clone https://github.com/hw630590/discord-music-bot.git
cd discord-music-bot
```
