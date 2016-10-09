var React = require('react');
var ReactDOM = require('react-dom');
var githubHelpers = require('utils/apiHelpers.js')

var Weather = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program!</div>
    )
  }
});

ReactDOM.render(<Weather />, document.getElementById('app'));
