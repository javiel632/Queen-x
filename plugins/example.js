/**
 * Example Plugin for QUEEN-X Bot
 * This shows how to create commands
 */

const { cmd } = require('../command');

// Example 1: Simple text command
cmd({
  pattern: "hello",
  alias: ["hi", "hey"],
  desc: "Say hello to the bot",
  react: "👋",
  function: async (conn, mek, m, { from, quoted, pushname, isOwner }) => {
    const greeting = `Hey ${pushname}! 👋 Welcome to QUEEN-X MD`;
    conn.sendMessage(from, { text: greeting }, { quoted: mek });
  }
});

// Example 2: Owner-only command
cmd({
  pattern: "test",
  alias: ["t"],
  desc: "Test command (Owner only)",
  react: "🧪",
  function: async (conn, mek, m, { from, quoted, isOwner, q }) => {
    if (!isOwner) return m.reply("🚫 This command is for owner only!");
    
    const testMsg = `✅ Test command working!\nMessage: ${q || "No message"}`;
    conn.sendMessage(from, { text: testMsg }, { quoted: mek });
  }
});

// Example 3: Body listener (listens to all messages)
cmd({
  on: "body",
  desc: "Listener example",
  function: async (conn, mek, m, { body, isOwner }) => {
    // This runs on every message
    // You can add logic here
  }
});

// Example 4: Image handler
cmd({
  on: "image",
  desc: "Handle image messages",
  function: async (conn, mek, m, { from, quoted }) => {
    const reply = "📸 I received an image!";
    conn.sendMessage(from, { text: reply }, { quoted: mek });
  }
});

// Export is handled automatically by the bot
