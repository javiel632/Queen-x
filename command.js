let commands = [];

function cmd(options) {
  commands.push(options);
}

function getAllCommands() {
  return commands;
}

module.exports = {
  commands,
  cmd,
  getAllCommands
};
