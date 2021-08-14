/**
 * lida com o tratamendo de string para transformar em números utilizáveis
 * @param { string } number - número do usuário
*/
function number(number) {
  let _string = String(number)
  let _parsed = _string.replace(/\D/g, '')

  return _parsed
}

module.exports = {
  number
}