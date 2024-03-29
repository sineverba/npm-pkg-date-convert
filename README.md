Date Convert
============

| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/%40sineverba%2Fdate-convert.svg)](https://badge.fury.io/js/%40sineverba%2Fdate-convert) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-date-convert/branches/master.svg)](https://sineverba.semaphoreci.com/projects/npm-pkg-date-convert) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/npm-pkg-date-convert.svg?style=svg)](https://circleci.com/gh/sineverba/npm-pkg-date-convert) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-date-convert/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-date-convert?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-date-convert&metric=alert_status)](https://sonarcloud.io/dashboard?id=npm-pkg-date-convert) |


`date-convert` converts a ISO format YYYYMMDD string "19820405" to "05/04/1982" (where 05 is day and 04 is April). Use `"/"` as separator in output.

It works also with a date with other format. Simply, call the method `fromIsoToHuman`.

For example

```js
const newDate = fromIsoToHuman("2024-01-31T15:27:42.427438", "DD/MM/YYYY");
console.log(newDate); // It prints 31/01/2024
```

### Accepted INPUT

| Input | Output |
| ----- | -------|
| "20220323" | 23/03/2022 |
| "2022-03-23" | 23/03/2022 |
| "2022-03-09T12:31:16.699904" | 09/03/2022 |


## Installation
`npm install @sineverba/date-convert`

## Usage

```js
// Import module
import { fromHumanToIso, fromIsoToHuman } from "@sineverba/date-convert";
// Or
// var {fromIsoToHuman, fromHumanToIso} = require('@sineverba/date-convert');

const humanDate = fromIsoToHuman("20200102");
console.log(humanDate); // returns 02/01/2020

const humanDateWithFormat = fromIsoToHuman("20200102", "YYYY-MM-DD");
console.log(humanDateWithFormat); // returns 2020-01-02

const isoDate = fromHumanToIso("02/01/2020");
console.log(isoDate); // returns 20200102

const isoDateWithFormat = fromHumanToIso("2020-01-02", "YYYY-MM-DD");
console.log(isoDateWithFormat); // returns 20200102
```

## Tests

`npm run test` for simple test

`npm run coverage` for coverage
