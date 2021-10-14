/**
 * verifica se o número está na lista de banidos
 * @param { object } authorNumber - número do autor da mensagem
 * @param { Array<string> } numberBlacklist - lista de números banidos
*/
function isNumberBlacklisted(authorNumber, numberBlacklist) {
  return numberBlacklist.some((numberBanned) => (authorNumber === numberBanned))
}

module.exports = {
  isNumberBlacklisted
}