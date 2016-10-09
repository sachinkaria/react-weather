var React = require('react');
var ReactDOM = require('react-dom');
var apiHelpers = require('./utils/apiHelpers')

var Weather = React.createClass({
  getInitialState: function() {
    return {
      weather: '',
      temp: 0,
      humidity: 0,
      wind: 0
    }
  },
  fetchData: function() {
      apiHelpers.getCityInfo()
      .then(function (response){
        console.log(response)
      })
    },
  componentWillMount: function(){
    this.fetchData();
  },

  render: function () {
    return (
      <div>Hello</div>
    )
  }
})


ReactDOM.render(<Weather />, document.getElementById('app'));
