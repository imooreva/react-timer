var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countdownStatus: 'stopped'        
        };
    },
    //called when state is set with handleSetCountdown
    //fired after an update to your application, either to its props or its state
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break;
            }
        } 
    },
    //is fired before componentDidUpdate, takes the next props and next state instead of previous props and state
    /*componentWillUpdate: function(nextProps, nextState) {
        
    },
    //called as your component is mounted, just before shown to screen, no access to hrefs or DOM
    componentWillMount: function() {
        console.log('componentWillMount');
    },
    //happens after rendering to DOM, so you'll have access to hrefs for updating
    componentDidMount: function() {
        console.log('componentDidMount');
    },*/
    //fired by React, just before your component is visually removed from the DOM
    componentWillUnmount: function() {
        //console.log('componentDidUnmount');
        clearInterval(this.timer);
        this.timer = undefined;
    },
    handleStatusChange: function(newStatus) {
        this.setState({countdownStatus: newStatus});
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if (newCount === 0) {
                this.setState({ countdownStatus: 'stopped' });
            }
        }, 1000);
    },
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    render: function() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>        
        );
    }    
});

module.exports = Countdown;
