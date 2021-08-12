function template(msg) {
  console.log(msg); // event payload
  console.log(this); // session 
}

module.exports = {
  name: "exampleA",
  trigger: "message_create",
  template: template
};
