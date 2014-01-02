# hodor

An indispensable utility for Game of Thrones fans

## Example

index.js:

    var hodor = require('hodor');

    var response = hodor('Hodor, bring my brother here.');

    console.log(response);

***

    $ node index.js
    Hodor.

## Module API

    var hodor = require('hodor');

### hodor([...])

Returns `"Hodor."`, no matter what arguments you pass in. Just like Hodor.

## Command line utility

Call `hodor` from the command line:

    $ hodor
    Hodor.

Stream anything into `hodor`:

    $ echo "Hodor, will you help Bran down to the hall?" | hodor
    Hodor.
    $ pwd | hodor
    Hodor.

Stream anything out of `hodor`:

    $ hodor | cat
    Hodor.

Become Pipey McPiperson:

    $ ls -l | hodor | cat
    Hodor.

## Installation

    $ npm install hodor

Or to use the `hodor` command anywhere (because it's super useful):

    $ npm install -g hodor

## Development

It's recommended to run the tests while developing. If you call upon the Night's Watch, hodor, the command line utility & the tests will all be monitored, and the tests will run when you change any of those files:

    $ npm run nights-watch

## License

MIT

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/colingourlay/hodor/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

