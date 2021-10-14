const utils = require("../../_utils");

const aboutText = utils.file.openTXT(__dirname, "./about.txt");

function template(msg) {
  if (msg.body.includes("\\about")) 
    msg.reply(aboutText);
}

module.exports = {
  name: "about",
  trigger: "message_create",
  template: template,
};
