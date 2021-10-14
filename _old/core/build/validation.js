class Validate {
  constructor(component) {
    this._component = component
  }

  _validate(condition, error) {
    if (condition) {
      throw Error(error)
    }
  }

  name() {
    this._validate(
      (typeof this._component.name !== 'string'),
      'Component name should be a string'
    )
  }

  trigger() {
    this._validate(
      (typeof this._component.trigger !== 'string'),
      'Component trigger should be a string'
    )
  }

  props() {
    let isArray = Array.isArray(this._component.props);
    let isDefined = typeof this._component.props !== 'undefined'

    this._validate(
      (isDefined && !isArray),
      'Component props should be an array'
    )
  }

  template() {
    this._validate(
      (typeof this._component.template !== 'function'),
      'Component template should be a function'
    )
  }
}

module.exports = {
  Validate
}