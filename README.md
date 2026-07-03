# 𝐐𝐔𝐄𝐄𝐍 -𝐗 𝐁𝐘 𝐉𝐀𝐕𝐈𝐄𝐋 ♥︎

> A powerful WhatsApp bot built with Baileys and Node.js

## 🚀 Features

- ✅ WhatsApp Web API Integration (Baileys)
- ✅ Auto Message Reactions
- ✅ Auto Status Seen & Reply
- ✅ Anti ViewOnce Detection
- ✅ Command System with 50+ plugins
- ✅ Media Handling (Images, Videos, Audio)
- ✅ Group Management
- ✅ Easy Plugin System
- ✅ Deployable on Render
- ✅ AI Integration
- ✅ Sticker Maker
- ✅ Media Downloader

## 📋 Requirements

- Node.js >= 18.0.0
- npm or yarn
- WhatsApp Account
- FFmpeg (for media conversion)

## 🔧 Installation

### Local Setup

```bash
git clone https://github.com/javiel632/Queen-x.git
cd Queen-x
npm install
cp .env.example .env
# Add your SESSION_ID to .env
npm start
```

### Deploy on Render

1. Push to GitHub
2. Go to [Render.com](https://render.com)
3. Create new Web Service
4. Select Queen-x repository
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Add Environment Variables:
   - SESSION_ID: Your WhatsApp session
   - PREFIX: . (or your preferred prefix)
   - MODE: public
8. Deploy! 🎉

## ⚙️ Configuration

Edit `.env`:

```env
PREFIX=.
SESSION_ID=your_session_here
MODE=public
OWNER_REACT=true
AUTO_REACT=true
READ_MESSAGE=true
BOT_NAME=QUEEN-X MD
OWNER_NUMBER=254112167030
```

## 📝 Commands (50+)

- `.help` - Show help menu
- `.ping` - Check response
- `.alive` - Check status
- `.owner` - Owner info
- `.ai` - AI Chat
- `.sticker` - Make sticker
- `.download` - Download media
- `.tiktok` - Download TikTok
- `.facebook` - Download Facebook
- And 40+ more...

## 📁 File Structure

```
Queen-x/
├── index.js
├── config.js
├── command.js
├── package.json
├── .env.example
├── exif.js
├── lib/
│   ├── functions.js
│   └── msg.js
├── plugins/
└── sessions/
```

## 🎮 Add Commands

Create `plugins/mycommand.js`:

```javascript
const { cmd } = require('../command');

cmd({
  pattern: "test",
  alias: ["t"],
  desc: "Test command",
  react: "✅",
  function: async (conn, mek, m, { from, quoted, q }) => {
    m.reply("Hello!");
  }
});
```

## 🔐 Getting Session

1. Run: `npm start`
2. Scan QR code with WhatsApp
3. Copy from `sessions/creds.json`
4. Set as `SESSION_ID` in `.env`

## 🐛 Troubleshooting

- Bot not responding? Check SESSION_ID
- Commands not working? Check prefix
- Deployment failed? Check env vars

## 📞 Support

- Developer: [@javiel632](https://github.com/javiel632)
- WhatsApp: +254112167030

## 📜 License

MIT License

---

Made with ❤️ by JAVIEL
