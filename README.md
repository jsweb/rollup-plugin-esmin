# rollup-plugin-esmin

Rollup plugin to minify ES6+ code using babel-minify with no transpiling to ES5.

## Why?

Modern browsers and Node.js are up to date with ES6+ native support.

Except for the **work in progress** `import` and `export` native support, but it is coming soon.

So, we can generate lighter bundles now by just let **rollup** resolve `import` and `export` and not transpiling ES6+ code to ES5, but just minifying it.

## Install

```
npm i -D rollup-plugin-esmin
```

or

```
yarn add -D rollup-plugin-esmin
```

## Usage

Just import on rollup config script and call it into `plugins` array.

```javascript
import esmin from 'rollup-plugin-esmin'

export default {
  input: 'src/escode.js',
  plugins: [
    esmin()
  ],
  output: {
    format: 'umd',
    file: 'dist/modern.umd.js'
  }
}
```

Optionally, `esmin()` can receive an object argument with parameters to transmit to `babel-minify`.

This object can contains these optional keys:

```javascript
esmin({
  options: {},
  overrides: {}
})
```

Those `options` and `overrides` are the same as documented at [babel-minify](https://github.com/babel/minify/tree/master/packages/babel-minify).
