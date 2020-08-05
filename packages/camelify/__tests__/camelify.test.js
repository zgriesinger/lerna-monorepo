'use strict';

const camelify = require('..');

describe('camelify', () => {
    it('tests camelify', () => {
        console.log = jest.fn();
        camelify();
        expect(console.log).toHaveBeenCalledWith('============ Welcome to Camelify ============');
        expect(console.log).toHaveBeenCalledWith('This is a Single Humped Camel 🐪');
        expect(console.log).toHaveBeenCalledWith('This is camelCase Single Humped Camel', 'singleHumpedCamel');
        expect(console.log).toHaveBeenCalledWith('This is a Double Humped Camel 🐫');
        expect(console.log).toHaveBeenCalledWith('This is camelCase Double Humped Camel', 'doubleHumpedCamel');
    });
});
