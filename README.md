# hodor-api

An indispensable utility for Game of Thrones fans

## Example

index.js:

    var hodor = require('hodor-api');

    var response = hodor('Hodor, bring my brother here.');

    console.log(response);

***

    $ node index.js
    Hodor.

## API

    var hodor = require('hodor-api');

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

    $ npm install hodor-api

Or to use the `hodor` command anywhere (because it's super useful):

    $ npm install -g hodor-api

## Development

It's recommended to run the tests while developing. If you call upon the Night's Watch, hodor, the command line utility & the tests will all be monitored, and the tests will run when you change any of those files:

    $ npm run nights-watch

## License

MIT

## Note about the new package name

This was previously published to npm as `hodor`, but I've transferred ownership of that name to another author with a much cooler hodor library. You should check it out!

My watch has ended.
