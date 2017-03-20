var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
    
    describe('formatSeconds', () => {
        it('should format seconds when min/sec are less than 10', () => { 
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 61;
            let expected = '01:01';
            let actual = clock.formatSeconds(seconds);
            
            expect(actual).toBe(expected);
        });
    });
});