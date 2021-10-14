// es6 imports
import fs from "fs";
import { Client } from "whatsapp-web.js";
import { SESSION_FILE_PATH, PUPPETEER_OPTIONS } from "./constants";

// common.js import
const qrcode = require("qrcode-terminal");

/**
 * ponto de entrada para a biblioteca whatsapp-web.js
 * @see https://docs.wwebjs.dev/Client.html
 * @extends { whatsapp.Client }
 */
export class Session extends Client {
  /**
   * sobrepõe as configurações do puppeteer para evitar erros no deploy
   * pode criar falhas de segurança
   * @see https://stackoverflow.com/questions/66998228/why-is-no-sandbox-a-unsafe-arg-in-puppeteer
   */
  constructor() {
    /* @ts-ignore */
    super({ puppeteer: PUPPETEER_OPTIONS });
  }

  private save() {
    // mostra um código qr na tela para o usuário autenticar com o celular
    this.on("qr", (qr) => qrcode.generate(qr, { small: true }));

    // se autenticado, salva um arquivo json com os dados da sessão
    this.on("authenticated", (session) => {
      fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(session));
    });

    // se não autenticado, exibe uma mesagem de erro no terminal
    this.on("auth_failure", (error) => console.log(error));
  }

  private load() {
    // carrega os dados do json em um objeto
    let raw = fs.readFileSync(SESSION_FILE_PATH);
    let data = JSON.parse(String(raw));

    // carrega os dados do objeto no local storage do navegador
    /* @ts-ignore */
    this.options.session = data;
  }

  public start() {
    // carrega os dados no navegador se os dados existirem, se inicia uma nova sessão e salva
    fs.existsSync(SESSION_FILE_PATH) ? this.load() : this.save();

    // inicializa a biblioteca
    this.initialize();

    // mostra na tela quando está pronto
    this.on("ready", () => console.log("cliente pronto"));
  }
}
