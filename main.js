const minify = require('babel-minify')

module.exports = ({ options = {}, overrides = {} } = {}) => ({
  name: 'esmin',
  renderChunk(source = '', {} = {}, opts = {}) {
    const result = minify(source, options, overrides)
    result.code = opts.banner ? `${opts.banner}\n${result.code}` : result.code
    return result
  }
})
