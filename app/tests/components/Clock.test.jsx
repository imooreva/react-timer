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
    
    describe('render', () => {
        it('should render clock to output', () => {
            let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            let $el = $(ReactDom.findDOMNode(clock));
            let actualText = $el.find('.clock-text').text();
            
            expect(actualText).toBe('01:02');
        });
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