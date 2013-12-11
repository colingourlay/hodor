#!/usr/bin/env node

var fs = require('fs');
var optimist = require('optimist');
var hodor = require('../');

var argv = optimist(process.argv.slice(1)).argv;

function hodorOut(data) {
    process.stdout.write(hodor(data));
    process.exit();
}

process.stdout.on('error', process.exit);

if (argv.h || argv.help) {
    return fs.createReadStream(__dirname + '/usage.txt')
        .pipe(process.stdout)
        .on('close', function () {
            process.exit(1);
        });
}

if (argv.v || argv.version) {
    return console.log(require('../package.json').version);
}

if (process.stdin.isTTY) {
    hodorOut();
} else {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    process.stdin.on('end', function () {
        hodorOut();
    });
}