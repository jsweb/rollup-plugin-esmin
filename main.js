import minify from 'babel-minify'

export default function ({ options = {}, overrides = {} } = {}) {
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
