# errres

Makes promise from (err, res) pair. Сonsider this as a [unthen](https://github.com/astur/unthen) vice versa.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i errres
```

## Usage

```js
const errres = require('errres');

errres(new Error()).catch(e => console.log(e));
errres(null, 'TEST').then(r => console.log(r))
```

## License

MIT

[npm-url]: https://npmjs.org/package/errres
[npm-image]: https://badge.fury.io/js/errres.svg
[travis-url]: https://travis-ci.org/astur/errres
[travis-image]: https://travis-ci.org/astur/errres.svg?branch=master