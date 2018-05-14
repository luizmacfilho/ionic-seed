# Ionic Seed

A simple seed to start use Ionic with NgRx.

This seed is using Ionic 3, Angular 5 and NgRx 5.

# Summary
* [Getting Started](#getting-started)
    * [Requirements](#requirements)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [File Structure](#file-structure)
* [Docs](#docs)
* [License](#license)

## Getting Started

### Requirements

Node >= 8.0
NPM >= 5 or Yarn

### Installing

Execute the following steps to start a new project:

1. Run `git clone --depth 1 git@github.com:luizmacfilho/ionic-seed.git` to clone the seed
2. Open ionic-seed folder running `cd ionic-seed`
3. Run `npm install` to download all dependencies

### Running

In ionic-seed folder:

1. Run `ionic serve` to start init
2. Go to http://0.0.0.0:3000 or http://localhost:3000 in your browser

## File Structure

```
ionic-seed/
 ├──config/                        * configuration files should be here
 │   └──webpack.config.js          * webpack config file
 │
 ├──resorces/                      * ionic resources folder
 |
 ├──src/                           * source files that will be compiled to javascript
 |   ├──index.html                 *
 |   ├──manifest.json              *
 |   ├──service-worker.js          *
 │   │
 │   ├──actions/                   *
 │   │
 │   ├──app/                       *
 │   │
 │   ├──assets/                    *
 │   │
 │   ├──effects/                   *
 │   |
 │   ├──environments/              *
 │   |
 │   ├──models/                    *
 │   |
 │   ├──pages/                     *
 │   |
 │   ├──reducers/                  *
 │   |
 |   └──theme/                     *
 │
 ├──config.xml                     *
 ├──ionic.config.json              *
 ├──package.json                   *
 ├──tsconfig.json                  *
 └──tslint.js                      *

```

## Docs

- [Ionic](https://ionicframework.com/docs/) - Official Ionic docs
- [NgRx](https://github.com/ngrx/platform) - Official NgRx repo
- [Angular](https://angular.io/docs) - Official Angular docs
- [Environment variables](https://github.com/gshigeto/ionic-environment-variables) - A repository used to explain how environment variables work

## License
[MIT](/LICENSE)