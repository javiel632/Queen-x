const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

const sms = (conn, m, hasParent) => {
  let M = proto.WebMessageInfo;
  if (m.key.remoteJid.includes('@broadcast')) {
    m.message = m.message.viewOnceMessageV2?.message;
  }
  if (m.mtype === 'protocolMessage') {
    m.type = 'protocolNotification';
  }
  m.text =
    m.conversation ||
    m.message?.caption ||
    m.message?.text ||
    (m.message?.extendedTextMessage?.text) ||
    m.text ||
    '';
  m.mentionedJid = m?.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
  m.from = m.key.remoteJid;
  m.sender = m.isFromMe
    ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id)
    : m.participant || m.from;
  m.fromMe = m.key.fromMe;
  m.id = m.key.id;
  m.device = m.id.length > 21 ? 'android' : 'ios';
  m.isGroup = m.from.endsWith('@g.us');
  m.chat = m.isGroup ? m.from : m.sender;
  m.isOwner = false;
  m.quoted = null;
  m.quotedChat = null;

  m.reply = (teks) => conn.sendMessage(m.from, { text: teks }, { quoted: m });
  m.copy = () => m;
  m.react = (emoji) => {
    conn.sendMessage(m.from, { react: { text: emoji, key: m.key } });
  };

  return m;
};

const downloadMediaMessage = async (message) => {
  let mime = (message.msg || message).mimetype || '';
  let messageType = message.mtype
    ? message.mtype.replace(/Message/gi, '')
    : mime.split('/')[0];
  const stream = await downloadContentFromMessage(message, messageType);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  return buffer;
};

module.exports = { sms, downloadMediaMessage };
