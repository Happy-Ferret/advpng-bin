'use strict';

var assert = require('assert');
var Bin = require('bin-wrapper');
var fs = require('fs');
var options = require('../lib/advpng').options;
var path = require('path');

describe('advpng.build()', function () {
  it('should rebuild the advpng binaries', function (callback) {
    this.timeout(false);
    var bin = new Bin(options);

    bin.path = path.join(__dirname, '../vendor', bin.bin);
    bin.buildScript = './configure && make && mv ./advpng ' + path.join(__dirname, '../vendor/advpng');

    bin.build(function () {
      var origCTime = fs.statSync(bin.path).ctime;
      var actualCTime = fs.statSync(bin.path).ctime;

      assert(actualCTime !== origCTime);
      callback();
    });
  });
});