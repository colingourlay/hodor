var test = require('tape');

var hodor = require('../');
var input = require('./input');

test('basic', function (t) {
    t.plan(input.length);

    input.forEach(function (x) {
       t.equal(hodor(x), 'Hodor.', 'output for input "' + x + '" should be "Hodor.".');
    });
});