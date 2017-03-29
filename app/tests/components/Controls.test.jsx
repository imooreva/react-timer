var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');


describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });
    describe('render', () => {
        it('should render pause when started', () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            let $el = $(ReactDom.findDOMNode(controls));
            let $pauseButton = $el.find('button:contains(Pause)');
            //expecting to find the pause button
            expect($pauseButton.length).toBe(1)            
        });
        it('should render start when paused', () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            let $el = $(ReactDom.findDOMNode(controls));
            let $startButton = $el.find('button:contains(Start)');
            //expecting to find the pause button
            expect($startButton.length).toBe(1)            
        });
    });
});