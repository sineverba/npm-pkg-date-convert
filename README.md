Date Convert
============

| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/%40sineverba%2Fdate-convert.svg)](https://badge.fury.io/js/%40sineverba%2Fdate-convert) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-date-convert/branches/master.svg)](https://sineverba.semaphoreci.com/projects/npm-pkg-date-convert) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/npm-pkg-date-convert.svg?style=svg)](https://circleci.com/gh/sineverba/npm-pkg-date-convert) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-date-convert/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-date-convert?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-date-convert&metric=alert_status)](https://sonarcloud.io/dashboard?id=npm-pkg-date-convert) |


`date-convert` converts a 8-digit, ISO format YYYYMMDD, string "19820405" to "05/04/1982" (where 05 is day and 04 is April).

Use `"/"` as separator.

## Installation
`npm install @sineverba/date-convert`

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

`npm run test` for simple test

`npm run cover` for coverage

### SonarQube (local Docker)
+ Spin images `docker-compose up -d`
+ Create a new project inside Sonarqube and grab the token
+ Replace the token in the ENV var of `docker-compose.yml` file
+ Stop with `docker-compose stop` and restart with `docker-compose up -d`
+ Next spin with `make sonar`

### Multiple npm accounts in system

+ Copy `npmrc.txt` to `.npmrc`
+ Add token inside

### Use SSH Git key per-project
`$ git config --local core.sshCommand "ssh -i ~/.ssh/id_rsa"`