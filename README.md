Date Convert
============

| CI / CD | Status |
| ------- | ------ |
| Travis | [![Build Status](https://travis-ci.com/sineverba/npm-pkg-date-convert.svg?branch=master)](https://travis-ci.com/sineverba/npm-pkg-date-convert) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-date-convert/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-date-convert?branch=master) |

`date-convert` converts a 8-digit, ISO format YYYYMMDD, string "19820405" to "05/04/1982" (where 05 is day and 04 is April).

Use `"/"` as separator.

## Installation
`npm install date-convert`

## Usage

```js
// Import module
var {fromIsoToHuman, fromHumanToIso} = require('@sineverba/date-convert');

var humanDate = fromIsoToHuman("20200102");
console.log(humanDate); // returns 02/01/2020

var isoDate = fromHumanToIso("02/01/2020")
console.log(isoDate); // returns 20200102
```

## Tests

`npm test` for simple test

`npm cover` for coverage

### Multiple npm accounts in system

+ Copy `.npmrc.example` to `.npmrc`
+ Add token inside

### Use SSH Git key per-project
`$ git config --local core.sshCommand "ssh -i ~/.ssh/id_rsa"`