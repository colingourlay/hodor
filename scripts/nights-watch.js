var Gaze = require('gaze').Gaze;
var npm = require("npm");
var path = require('path');

var OATH = [
    'Night gathers, and now my watch begins.',
    'It shall not end until my death.',
    'I shall take no wife, hold no lands, father no children.',
    'I shall wear no crowns and win no glory.',
    'I shall live and die at my post.',
    'I am the sword in the darkness.',
    'I am the watcher on the walls.',
    'I am the shield that guards the realms of men.',
    'I pledge my life and honor to the Night\'s Watch,',
    'for this night and all the nights to come.'
];

var hodorPath = path.resolve(__dirname + '/../index.js');
var binPath = path.resolve(__dirname + '/../bin/cmd.js');
var testPath = path.resolve(__dirname + '/../test') + '/**/*';

var gaze = new Gaze([hodorPath, binPath, testPath]);

// Files have all started watching
gaze.on('ready', function (watcher) {
    console.log(OATH.join('\n') + '\n');
});

// A file has been added/changed/deleted has occurred
gaze.on('all', function(event, filepath) {
    console.log(filepath + ' was ' + event);
    npm.load({}, function () {
        npm.commands.runScript(['test'], function (err, data) {
            if (err) { throw err; }
        });
    });
});