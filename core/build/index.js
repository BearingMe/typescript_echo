const validation = require('./validation')

class Components {
  constructor(components) {
    this._components = components
  }

  _validateComponents() {
    this._components.forEach(component => {
      let validade = new validation.Validate(component)
      validade.name()
      validade.trigger()
      validade.props()
      validade.template()
    })
  }

  bind(object) {
    this._components.forEach(component => {
      component.template = component.template.bind(object)
    })    
  }

  create() {
    this._validateComponents()
    return this._components
  }
}

module.exports = {
  Components
}