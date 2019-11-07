// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{json object}}

'use strict'

const json = context => {
  return JSON.stringify(context)
}

module.exports = json
