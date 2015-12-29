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
    onClick : function(){
        this.setState({
            numClicks: this.state.numClicks+1
        })
    },
    render: function(){
        return (
            <div onClick={this.onClick}>
            {this.state.numClicks} Clicks
            </div>
        )
    }
})

module.exports = ClickCounter;
