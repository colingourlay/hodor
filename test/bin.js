var test = require('tape');
var spawn = require('child_process').spawn;
var path = require('path');

test('bin', function (t) {
    var binPath = path.resolve(__dirname, '../bin/cmd.js');

    t.test('tty', function (t) {
        var ps = spawn(binPath, []);
        var out = '';
        var err = '';

        t.plan(3);

        ps.stdout.on('data', function (buf) { out += buf; });
        ps.stderr.on('data', function (buf) { err += buf; });

        ps.on('exit', function (code) {
            t.equal(code, 0, 'process exit code should be 0');
            t.equal(err.length, 0, 'process error output length should be 0');
            t.equal(out, 'Hodor.', 'process output for tty execution should be "Hodor."');
        });

        ps.stdin.end();
    });

    t.test('pipe', function (t) {
        var ps = spawn(binPath, []);
        var ls = spawn('ls', ['-la']);
        var out = '';
        var err = '';

        t.plan(3);

        ps.stdout.on('data', function (buf) { out += buf; });
        ps.stderr.on('data', function (buf) { err += buf; });

        ps.on('exit', function (code) {
            t.equal(code, 0, 'process exit code should be 0');
            t.equal(err.length, 0, 'process error output length should be 0');
            t.equal(out, 'Hodor.', 'process output for any piped stream should be "Hodor."');
        });

        ls.stdout.pipe(ps.stdin);
    });

});