var React = require('react');
var apiHelpers = require('../utils/apiHelpers')
var classNames = require('classnames');

var weatherData = [];
var weatherStyle={color: "White",
fontSize: "5vw",
margin:"0 auto",
maxWidth: "50%",
minWidth:"50%",
maxHeight:"50%",
float:"left",
textAlign: "center"};

var CityName = React.createClass({
  render: function () {
    var titleStyle={color:"white", textAlign:"center", fontSize:"60px", minWidth:"100%"}
    return (
      <h1 style={titleStyle} className="city"> {this.props.city} </h1>
    );
  }
});

var CityTemp = React.createClass({
  render: function () {
    var temperatureStyle={float: "right",color: "Blue", fontSize:"60px", maxWidth:"50%"};
    return (
      <div style={weatherStyle}>
      <span className="temp-number">{this.props.temperature}&deg;</span>
      </div>
    );
  }
});

var CityWeather = React.createClass({
  render: function () {
    var weatherClass = ('wi wi-wu-' + this.props.weather.replace(/\s/g, '').toLowerCase());

    return (
      <div className="weather" style={weatherStyle}>
      <i className={weatherClass}></i>
      </div>
    );
  }
});

var CityHumidity = React.createClass({
  render: function () {
    return (
      <div style={weatherStyle}>
      <span>{this.props.humidity}</span>
      </div>
    );
  }
});

var Cities =  React.createClass({
  render: function(){
    var cityNodes = this.props.data.map(function(city){
      var tempRounded = Math.round(city.data.current_observation.temp_c)
      var boxStyle = {backgroundColor: "blue"}

      return(
        <div style={boxStyle} key={city.data.current_observation.display_location.city} className="col-sm-4">
        < CityName city={city.data.current_observation.display_location.city}/>
        <hr></hr>
        < CityWeather weather={city.data.current_observation.weather}/>
        < CityTemp temperature={tempRounded}/>
        < CityHumidity humidity={city.data.current_observation.relative_humidity}/>
        </div>
      );
    });
    return (
      <div>
      {cityNodes}
      </div>
    );
  }
});

var Home = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },
  fetchData: function() {
    apiHelpers.getCityInfo()
    .then(function (response){
      weatherData.push(response)
      this.setState({ data: weatherData
      })
      console.log(this.state.data)
    }.bind(this), 10000)
  },
  componentWillMount: function(){
    this.fetchData();
  },
  componentDidMount: function(){
    window.setInterval(function(){
      this.fetchData();
    }.bind(this), 10000);
  },
  render: function () {

    return (
      <div className="container">
      <Cities data={this.state.data} />
      </div>
    )
  }
});

module.exports = Home;
