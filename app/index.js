var React = require('react');
var ReactDOM = require('react-dom');

var Weather = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program!</div>
    )
  }
});

ReactDOM.render(<Weather />, document.getElementById('app'));
