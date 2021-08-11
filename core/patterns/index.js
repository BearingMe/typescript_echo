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

module.exports = {
  Observable,
};
