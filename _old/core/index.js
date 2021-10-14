const auth = require("./auth");
const patterns = require("./patterns");
const build = require("./build")

class Bot {
  constructor(options) {
    this._session = new auth.Session();
    this._components = new build.Components(options.components);
    this._observeMessage = new patterns.Observable("message");
    this._observeMessageCreate = new patterns.Observable("message_create");
  }

  _loadObservers() {
    this._components.bind(this._session)

    this._observeMessage.subscribeAll(...this._components.create());
    this._observeMessageCreate.subscribeAll(...this._components.create());
  }

  _loadEvents() {
    this._session.on("message", (msg) =>
      this._observeMessage.notify(msg, this._session)
    );
    this._session.on("message_create", (msg) =>
      this._observeMessageCreate.notify(msg, this._session)
    );
  }

  start() {
    this._loadObservers();
    this._loadEvents();
    this._session.start();
  }
}

module.exports = Bot;
