const utils = require("../../_utils");
const functions = require("./functions")


async function template(msg) {
  let contact = await msg.getContact()
  let chat = await msg.getChat()

  let banned = utils.file.openJSON(__dirname, "./banned.json")
  let numberBlacklist = banned.byNumber.map(number => utils.handle.number(number))
  let authorNumber = utils.handle.number(contact.number)

  // verifica se é um grupo e se o número do autor da mensagem está na lista de ban
  if (chat.isGroup && functions.isNumberBlacklisted(authorNumber, numberBlacklist)) {
    let admList = chat.participants.filter(participant => participant.isAdmin)
    let admUserList = admList.map(adm => adm.id.user)
    let myUser = this.info.wid.user

    admUserList.includes(myUser) && chat.removeParticipants([contact.id._serialized])
  }
}


module.exports = {
  name: "about",
  trigger: "message",
  template: template,
};

