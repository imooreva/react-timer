var React = require('react');
var Navigation = require('Navigation');

//removed "this" from this.props.children below as it is not needed for arrow function

var Main = (props) => {
    return (        
        <div>
            <Navigation/>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                <p>Main.jsx Rendered</p>
                {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
