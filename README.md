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

Node >= 8.0 <br>
NPM >= 5 or Yarn

### Installing

Execute the following steps to start a new project:

1. Run `git clone --depth 1 git@github.com:luizmacfilho/ionic-seed.git` to clone the seed
2. Open ionic-seed folder running `cd ionic-seed`
3. Run `npm install` to download all dependencies

### Running

In ionic-seed folder:

1. Run `ionic serve` to init project
2. Go to http://0.0.0.0:3000 or http://localhost:3000 in your browser

## File Structure

```
ionic-seed/
 ├──config/                        * configuration files are saved here
 │   └──webpack.config.js          * webpack config file
 │
 ├──e2e/                           * e2e test config folder
 │
 ├──resorces/                      * ionic resources folder
 |
 ├──src/                           * source files that will be compiled to javascript
 |   ├──index.html                 * index
 |   ├──manifest.json              * manifest config for PWA
 |   ├──service-worker.js          * service woriker config
 │   │
 │   ├──actions/                   * ngrx actions are saved here
 │   │
 │   ├──app/                       * main app config
 │   │
 │   ├──assets/                    * static files aresaved here
 │   │
 │   ├──effects/                   * ngrx effect are saved here
 │   |
 │   ├──environments/              * environment variables files are saved here
 │   |
 │   ├──models/                    * interfaces are saved here
 │   |
 │   ├──pages/                     * project pages folder
 │   |
 │   ├──reducers/                  * ngrx reducers are saved here
 │   |
 |   └──theme/                     * ionic theme stylesheets and sass variables
 |
 ├──test-config/                   * unit test config folder
 │
 ├──config.xml                     * apache cordova config file
 ├──ionic.config.json              * ionic config file
 ├──package.json                   * npm dependencies
 ├──tsconfig.json                  * typescrypt config
 └──tslint.js                      * typescrypt lint rules

```

## Docs

- [Ionic](https://ionicframework.com/docs/) - Official Ionic docs
- [NgRx](https://github.com/ngrx/platform) - Official NgRx repo
- [Angular](https://angular.io/docs) - Official Angular docs
- [Environment variables](https://github.com/gshigeto/ionic-environment-variables) - A repository used to explain how environment variables work
- [Test Configuration](https://leifwells.github.io/2017/08/27/testing-in-ionic-configure-existing-projects-for-testing/) - How to configure unit and a2a tests

## License
[MIT](/LICENSE)