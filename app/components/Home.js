var React = require('react');
var apiHelpers = require('../utils/apiHelpers')
var classNames = require('classnames');

var weatherData = [{data:{current_observation:{display_location: {city: "Nairobi"},temp_c: 25.5, weather: "Sunny"}}},
{data:{current_observation:{display_location: {city: "London"},temp_c: 5.5, weather: "Cloudy"}}}];

var weatherStyle={color: "White",
                  fontSize: "70px",
                  margin:"0 auto",
                  maxWidth: "100%",
                  minWidth:"100%",
                  maxHeight:"50%",
                  float:"left",
                  textAlign: "center",
                  paddingBottom: "10px"};

var boxStyle = {backgroundColor: "blue"}

var CityName = React.createClass({
  render: function () {
    var titleStyle={color:"white", textAlign:"center", minWidth:"100%", maxWidth:"100%", padding:"20px"}
    return (
      <h1 style={titleStyle} className="city"> {this.props.city} </h1>
    );
  }
});

var CityTemp = React.createClass({
  render: function () {
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

// var CityHumidity = React.createClass({
//   render: function () {
//     return (
//       <div style={weatherStyle}>
//       <span><i className="wi wi-raindrop"></i>{this.props.humidity}</span>
//       </div>
//     );
//   }
// });

function getBoxStyle(temperature){
  if (temperature < 0) {boxStyle = {backgroundColor: "#417BFF", opacity: 0.9, borderRadius:"5px", minHeight:"300px"}}
    else if (temperature < 15) {boxStyle = {backgroundColor: "#799AF4", opacity: 0.9, borderRadius:"5px", minHeight:"300px"}}
      else if (temperature < 25) {boxStyle = {backgroundColor: "#FFAC63", opacity: 0.9, borderRadius:"5px", minHeight:"300px"}}
        else if (temperature < 35) {boxStyle = {backgroundColor: "#FF6F39", opacity: 0.9, borderRadius:"5px", minHeight:"300px"}}
          else {boxStyle = {backgroundColor: "#EA4145", opacity: 0.9, borderRadius:"5px"}}
};

var Cities =  React.createClass({
  render: function(){
    var cityNodes = this.props.data.map(function(city){
      var tempRounded = Math.round(city.data.current_observation.temp_c)
      getBoxStyle(tempRounded)
      console.log(city);
      return(
        <div style={boxStyle} key={city.data.current_observation.display_location.city} className="row-fluid">
        < CityName city={city.data.current_observation.display_location.city}/>
        < CityWeather weather={city.data.current_observation.weather}/>
        < CityTemp temperature={tempRounded}/>
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
      <div>
      <Cities data={this.state.data} />
      </div>
    )
  }
});

module.exports = Home;
