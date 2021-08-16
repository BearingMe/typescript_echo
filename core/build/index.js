const validation = require('./validation')
const parse = require('./parse')
const variables = require('./variables')

class Components {
  constructor(components) {
    this._components = components
  }

  _validateComponents() {
    this._components.forEach(component => {
      let validade = new validation.Validate(component)
      validade.name()
      validade.trigger()
      validade.template()
    })
  }

  _loadProps() {
    this._components.forEach(component => {
      let template = component.template
      component.template = (payload) => {
        let flags = new parse.Flags(variables.regex, payload.body)
        template(payload, flags.any()) 
      }
    })
  }

  bind(session) {
    this._components.forEach(component => {
      component.template = component.template.bind(session)
    })
  }

  create() {
    this._validateComponents()
    this._loadProps()
    return this._components
  }
}

module.exports = {
  Components
}
