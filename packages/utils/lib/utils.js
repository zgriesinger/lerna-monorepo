'use strict';
const _ = require('lodash');

module.exports = {
    helloWorld,
    camelCase
};

function helloWorld() {
    return 'Hello World';
}

function camelCase(input) {
    return _.camelCase(input);
}
