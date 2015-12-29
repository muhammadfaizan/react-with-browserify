/**
 * Created by VD on 12/29/2015.
 */

var React = require('react');
var ReactDOM = require('react-dom');
console.log(typeof React);
console.log(typeof ReactDOM);

var ClickCounter = React.createClass({
    getInitialState: function(){
        return {
            numClicks: 0
        }
    },
    render: function(){
        return (
            <div>
            {this.state.numClicks} Clicks
            </div>
        )
    }
})

ReactDOM.render(
    <ClickCounter></ClickCounter>,
    document.getElementById('main')
);