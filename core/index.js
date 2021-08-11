const auth = require("./auth");
const patterns = require("./patterns");

class Bot {
  constructor(options) {
    this._session = new auth.Session();
    this._components = options.components;
    this._observeMessage = new patterns.Observable("message");
    this._observeMessageCreate = new patterns.Observable("message_create");
  }

  _loadObservers() {
    this._observeMessage.subscribeAll(this._components);
    this._observeMessageCreate.subscribeAll(this._components);
  }

  _loadEvents() {
    this._session.on("message", (msg) => this._observeMessage.notify(msg));
    this._session.on("message_create", (msg) => this._observeMessageCreate.notify(msg));
  }

  start() {
    this._loadObservers();
    this._loadEvents();
    this._session.start();
  }
}

module.exports = Bot;
