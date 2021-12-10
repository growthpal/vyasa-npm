[![1.0.1](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# VYASA

> In-house npm package to interact with vyasa. 

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Usage
Install the package


```sh
npm install @growthpal/vyasa
```

Import the package

```sh
const vyasa = require("@growthpal/vyasa")
or
import vyasa from '@growthpal/vyasa'
```

Set the enpoint

```sh
vyasa.setEndpoint("URL ENDPOINT OF VYASA)
```

Set the API key

```sh
vyasa.setKey("API_KEY")
```

Call vyasa

```sh
vyasa.logger("{DATA OF THE LOG IN JSON FORMAT.}")
```