const utils = require("../../_utils");

const about = utils.file.openTXT(__dirname, "./about.txt");

function template(msg) {
  if (msg.body.includes("\\about")) msg.reply(about);
}

module.exports = {
  name: "about",
  trigger: "message_create",
  template: template,
};
