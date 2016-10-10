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

var boxStyle = {backgroundColor: "blue"}

var CityName = React.createClass({
  render: function () {
    var titleStyle={color:"white", textAlign:"center", minWidth:"100%", maxWidth:"100%"}
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

function getBoxStyle(temperature){
  if (temperature < 0) {boxStyle = {backgroundColor: "#417BFF"}}
    else if (temperature < 15) {boxStyle = {backgroundColor: "#799AF4"}}
      else if (temperature < 25) {boxStyle = {backgroundColor: "#FFAC63"}}
        else if (temperature < 35) {boxStyle = {backgroundColor: "#FF6F39"}}
          else {boxStyle = {backgroundColor: "#EA4145"}}
};

var Cities =  React.createClass({
  render: function(){
    var cityNodes = this.props.data.map(function(city){
      var tempRounded = Math.round(city.data.current_observation.temp_c)
      getBoxStyle(tempRounded)
      console.log(tempRounded);
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
    }.bind(this))
  },
  componentWillMount: function(){
    this.fetchData();
  },
  componentDidMount: function(){
    window.setInterval(function(){
      this.fetchData();
    }.bind(this), 30000);
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
