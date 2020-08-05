'use strict';

const utils = require('..');

describe('utils', () => {
    it('should test utils', () => {
        expect(utils.helloWorld()).toBe('Hello World');
        expect(utils.camelCase('ThingOne')).toBe('thingOne');
    });
});
