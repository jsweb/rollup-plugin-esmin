const minify = require('babel-minify')

module.exports = function ({ options = {}, overrides = {} } = {}) {
  return {
    name: 'esmin',
    renderChunk: (source, {}, opts) => {
      const { banner } = opts
      const result = minify(source, options, overrides)
      result.code = banner ? `${banner}\n${result.code}` : code
      return result
    }
  }
}
