require('dotenv').config();

module.exports = {
  PREFIX: process.env.PREFIX || ".",
  SESSION_ID: process.env.SESSION_ID || "",
  MODE: process.env.MODE || "public",
  OWNER_REACT: process.env.OWNER_REACT || "true",
  AUTO_REACT: process.env.AUTO_REACT || "true",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🥲,😂,👍🏻,🙂,😔",
  READ_MESSAGE: process.env.READ_MESSAGE || "true",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
  AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "Seen by QUEEN MD 🧬",
  ANTI_VV: process.env.ANTI_VV || "false",
  MAX_UPLOAD_SIZE: process.env.MAX_UPLOAD_SIZE || 100,
  DB_URL: process.env.DB_URL || "",
  CAPTION: process.env.CAPTION || "𝐐𝐔𝐄𝐄𝐍 -𝐗 𝐁𝐘 𝐉𝐀𝐕𝐈𝐄𝐋 ♥︎",
  BOT_NAME: process.env.BOT_NAME || "QUEEN-X MD",
  OWNER_NAME: process.env.OWNER_NAME || "JAVIEL",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254112167030",
  PACK_NAME: process.env.PACK_NAME || "QUEEN-X",
  PACK_AUTHOR: process.env.PACK_AUTHOR || "JAVIEL"
};
