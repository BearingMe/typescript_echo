const path = require('path')
const fs = require('fs')

/**
 * abre um arquivo txt
 * @param { string } dirname - váriavel do ambiente __dirname
 * @param { string } relativePath - caminho relativo
 * @returns { string } texto do arquivo
 */
function openTXT(dirname, relativePath) {
  let fullPath = path.join(dirname, relativePath);
  let raw = fs.readFileSync(fullPath, { encoding: "utf-8" });
  let data = raw.toString();

  return data;
}

module.exports = {
  openTXT,
};
