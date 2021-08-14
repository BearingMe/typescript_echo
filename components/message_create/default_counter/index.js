counter = 0

function template(msg) {
  if (msg.body.includes('\count')) {
    counter++
    msg.reply(String(counter))
  }
}

module.exports = {
  name: "count",
  trigger: "message_create",
  template: template,
};
