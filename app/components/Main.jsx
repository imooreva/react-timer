var React = require('react');
var Navigation = require('Navigation');

//removed "this" from this.props.children below as it is not needed for arrow function

var Main = (props) => {
    return (
        <div>
            <Navigation/>
            <div>
               <div>
                   <p>Main.jsx Rendered</p>
                   {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
