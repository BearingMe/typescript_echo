/**
 * @typedef {Object} Component
 * @property {string} trigger palavra que aciona o evento
 * @property {Function} template função chamada no evento
 */

/**
 * Uma classe que recebe os componentes e os adiciona em uma lista
 * chamando todos de uma vez ao mesmo tempo
 * @see https://oieduardorabelo.medium.com/padr%C3%B5es-em-js-observer-pattern-bff0ecc55d01
 */
class Observable {
  /**
   * @param {('message' | 'message_create')} eventTrigger - palavra que aciona o evento
   */
  constructor(eventTrigger) {
    this._eventTrigger = eventTrigger;
    this._observers = [];
  }

  /**
   * adiciona um componente a lista
   * caso ele tenha o mesmo acionador de evento que a classe
   * @param { Component } component - componente do bot
   */
  subscribe(component) {
    if (component.trigger === this._eventTrigger)
      this._observers.push(component.template);
  }

  /**
   * adiciona vários componentes de uma vez
   * caso eles tenham o mesmo acionador de evento que a classe
   * @param { Array<Component> } args - componentes do bot
   */
  subscribeAll(...args) {
    args.forEach((component) => this.subscribe(component));
  }

  /**
   * chama todos os componentes de uma vez
   * @param payload - objeto emitido nos eventos do bot
   */
  notify(payload) {
    this._observers.forEach((observer) => observer(payload));
  }
}

module.exports = {
  Observable,
};
