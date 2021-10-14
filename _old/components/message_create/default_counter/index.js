counter = 0

function template(msg, props) {
  if (msg.body.includes('\\count')) {
    counter++
    msg.reply(String(counter))
    console.log(props)
  }
}

module.exports = {
  name: "count",
  trigger: "message_create",
  template: template,
};
