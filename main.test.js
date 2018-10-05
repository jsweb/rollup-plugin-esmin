const assert = require('assert')
const pack = require('./package.json')
const esmin = require('./main')
const plugin = esmin()

describe(pack.name, () => {
  it('should be a function', () => {
    assert.strictEqual(typeof esmin, 'function', `${esmin} is not a function`)
  })

  it('should return an object with name and renderChunk', () => {
    assert.strictEqual(typeof plugin, 'object', `${plugin} is not an object`)
    assert.strictEqual(plugin.name, 'esmin', 'module name is not esmin')
    assert.strictEqual(typeof plugin.renderChunk, 'function', 'renderChunk is not a function')
  })

  it('renderChunck should properly executes babel-minify', () => {
    const code = `
      const arr = [1,1,2,2,3,3,4,4,5,5]
      const set = [...new Set(arr)]
      console.log(set)
    `
    const exp = 'const arr=[1,1,2,2,3,3,4,4,5,5],set=[...new Set(arr)];console.log(set);'
    const min = plugin.renderChunk(code)

    assert.strictEqual(typeof min, 'object')
    assert.strictEqual(typeof min.code, 'string')
    assert.strictEqual(min.code, exp)
  })
})
