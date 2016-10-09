var React = require('react');
var ReactDOM = require('react-dom');
var apiHelpers = require('./utils/apiHelpers')

var Weather = React.createClass({
  getInitialState: function() {
    return {
      city: ''
    }
  },
  fetchData: function() {
      apiHelpers.getCityInfo()
      .then(function (response){
        console.log(response.data.current_observation.display_location.city)
        this.setState({
          city: response.data.current_observation.display_location.city
        })
      }.bind(this))
    },
  componentWillMount: function(){
    this.fetchData();
  },
  render: function () {
    return (
      <h1>Welcome to: {this.state.city}</h1>
    )
  }
})


ReactDOM.render(<Weather />, document.getElementById('app'));
