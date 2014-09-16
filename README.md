# [node-advpng-bin](https://npmjs.org/package/advpng-bin)

[advpng](http://advancemame.sourceforge.net/doc-advpng.html) node.js wrapper that optimize PNG images.

> The main purpose of this utility is to recompress png files to get the smallest possible size.
> Please note that this utility is not able to read a generic file. It's granted to be able to read only the files generated by the AdvanceMAME emulator.

[![Build Status](https://travis-ci.org/1000ch/node-advpng-bin.svg?branch=master)](https://travis-ci.org/1000ch/node-advpng-bin)
[![NPM version](https://badge.fury.io/js/advpng-bin.svg)](http://badge.fury.io/js/advpng-bin)
[![Dependency Status](https://david-dm.org/1000ch/node-advpng-bin.svg)](https://david-dm.org/1000ch/node-advpng-bin)
[![devDependency Status](https://david-dm.org/1000ch/node-advpng-bin/dev-status.svg)](https://david-dm.org/1000ch/node-advpng-bin#info=devDependencies)

## Install

```sh
$ npm install --save advpng-bin
```

## Usage

```js
var execFile = require('child_process').execFile;
var advpng = require('advpng-bin').path;

fs.writeFileSync('output.png', fs.readFileSync('input.png'));

execFile(advpng, ['--recompress', '--shrink-extra', 'output.png'], function (err) {
  if (err) {
    throw err;
  }
  
  console.log('Image minified');
});
```

## License

This is licensed under BSD.

[advpng](http://advancemame.sourceforge.net/doc-advpng.html) is licensed under GNU General Public License (GPL).