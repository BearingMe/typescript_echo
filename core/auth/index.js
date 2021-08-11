// imports
const fs = require("fs");
const path = require("path");
const qrcode = require("qrcode-terminal");
const whatsapp = require("whatsapp-web.js");

// constante globais
const SESSION_FILE_NAME = "session.json";
const SESSION_FILE_PATH = path.join(__dirname, SESSION_FILE_NAME);

/**
 * ponto de entrada para a biblioteca whatsapp-web.js
 * @see https://docs.wwebjs.dev/Client.html
 * @extends { whatsapp.Client }
 */
class Session extends whatsapp.Client {
  /**
   * sobrepõe as configurações do puppeteer para evitar erros no deploy
   * pode criar falhas de segurança
   * @constructor
   * @see https://stackoverflow.com/questions/66998228/why-is-no-sandbox-a-unsafe-arg-in-puppeteer
   */
  constructor() {
    super({
      puppeteer: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: false
      },
    });
  }

  /**
   * salva a sessão do navegador
   * @private
   */
  _save() {
    // mostra um código qr na tela para o usuário autenticar com o celular
    this.on("qr", (qr) => qrcode.generate(qr, { small: true }));

    // se autenticado, salva um arquivo json com os dados da sessão
    this.on("authenticated", (session) => {
      fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(session));
      console.log('O cliente está pronto!')
    });

    // se não autenticado, exibe uma mesagem de erro no terminal
    this.on("auth_failure", (error) => console.log(error));
  }

  /**
   * carrega a sessão no navegador
   * @private
   */
  _load() {
    // carrega os dados do json em um objeto
    let raw = fs.readFileSync(SESSION_FILE_PATH);
    let data = JSON.parse(raw);

    // carrega os dados do objeto no local storage do navegador
    this.options.session = data;
  }

  /**
   * inicia a sessão
   * @public
   */
  start() {
    // carrega os dados no navegador se os dados existirem, se inicia uma nova sessão e salva
    fs.existsSync(SESSION_FILE_PATH) ? this._load() : this._save();

    // inicializa a biblioteca
    this.initialize();
  }
}

module.exports = {
  Session,
};
