const auth = require("./auth");

class Observable {
  constructor(eventTrigger) {
    this._eventTrigger = eventTrigger;
    this._observers = [];
  }

  subscribe(component) {
    if (component.trigger === this._eventTrigger)
      this._observers.push(component.template);
  }

  subscribeAll(componentArray) {
    componentArray.forEach((component) => this.subscribe(component));
  }

  notify(payload) {
    this._observers.forEach((observer) => observer(payload));
  }
}

class Bot {
  constructor(options) {
    this._session = new auth.Session();
    this._components = options.components;
    this._observeMessage = new Observable("message");
    this._observeMessageCreate = new Observable("message_create");
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
    this._loadEvents()
    this._session.start()
  }
}

const exampleA = {
  name: "exampleA",
  trigger: "message",
  template: () => console.log("message -> exampleA"),
};

const exampleB = {
  name: "exampleB",
  trigger: "message_create",
  template: () => console.log("message_create -> exampleB"),
};

const exampleC = {
  name: "exampleC",
  trigger: "message",
  template: () => console.log("message -> exampleC"),
};

const exampleD = {
  name: "exampleD",
  trigger: "message_create",
  template: () => {
    throw new Error("fodeu");
  },
};

let bot = new Bot({
  components: [exampleA, exampleB, exampleC, exampleD],
});

bot.start();
