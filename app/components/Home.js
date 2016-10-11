var React = require('react');
var apiHelpers = require('../utils/apiHelpers')
var classNames = require('classnames');
var Masonry = require('react-masonry-component');
var weatherData = [];

var masonryOptions = {
    transitionDuration: 1
};
var weatherStyle={color: "White",
                  fontSize: "70px",
                  margin:"0 auto",
                  maxWidth: "100%",
                  minWidth:"100%",
                  maxHeight:"50%",
                  float:"left",
                  textAlign: "center",
                  paddingBottom: "10px"
                };

var boxStyle = {backgroundColor: "blue"}

var cityTime = {color: "White",
                float: "right",
                fontSize: "50px"}

var dropdowns = {color: "White",
                  backgroundColor: "#222",
                  float: "left",
                  fontSize: "20px",
                  marginRight: "30px",
                textAlign: "center"}

var navbar = {marginBottom: "50px"}
var searchBar = {backgroundColor: "#373737",
                borderColor:"#373737",
                color:"white",
                fontSize: "20px"}

var titleStyle={color:"white",
                textAlign:"center",
                minWidth:"100%",
                maxWidth:"100%",
                padding:"20px",
                fontSize:"40px"}


function getBoxStyle(temperature){
  if (temperature < 5) {boxStyle = {backgroundColor: "#417BFF", opacity: 0.9, borderRadius:"5px", minHeight:"300px"}}
    else if (temperature < 15) {boxStyle = {backgroundColor: "#799AF4", opacity: 0.9, borderRadius:"5px", minHeight:"300px"}}
      else if (temperature < 22) {boxStyle = {backgroundColor: "#FFAC63", opacity: 0.9, borderRadius:"5px", minHeight:"300px"}}
        else if (temperature < 30) {boxStyle = {backgroundColor: "#FF6F39", opacity: 0.9, borderRadius:"5px", minHeight:"300px"}}
          else {boxStyle = {backgroundColor: "#EA4145", opacity: 0.9, borderRadius:"5px"}}
};

var CurrentTime = React.createClass({
  setTime: function(){

    var currentdate = new Date();
    var hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset);

    if( hours >= 24 ){ hours -= 24; }
    if( hours < 0   ){ hours += 12; }

    hours = hours + "";
    if( hours.length == 1 ){ hours = "0" + hours; }

    var minutes = currentdate.getUTCMinutes();
    minutes = minutes + "";
    if( minutes.length == 1 ){ minutes = "0" + minutes; }

    seconds = currentdate.getUTCSeconds();
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  },
  componentWillMount: function(){
    this.setTime();
  },
  componentDidMount: function(){
    window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  },
  render: function() {
    return(
      <div>
      <span style={cityTime}>{this.state.hours}:{this.state.minutes}</span>
      </div>
    )
  }
});

var Results =  React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },
  fetchData: function(city) {
    apiHelpers.getCityInfo(city)
    .then(function (response){
      weatherData.push(response)
      this.setState({ data: weatherData
      })
    }.bind(this))
  },
  render: function(){
    var resultNodes = this.props.data.map(function(result){
      var urlString = result.l
      return(
        <a href="#" key={result.l} style={dropdowns} onClick={() => {this.fetchData(urlString)}} className="dropdown-item"> {result.name} </a>
      );
    }.bind(this));
    return (
      <div className="dropdown open">
        <div className="dropdown-menu" style={dropdowns}>
          {resultNodes}
        </div>
      </div>
    );
  }
});

var SearchInput = React.createClass({
  render: function () {
    return (
      <input className="form-control" type="text" placeholder="Search for a City" style={searchBar} value={this.props.value} onChange={this.props.action}/>
    );
  }
});

var SearchCity = React.createClass ({
  getInitialState: function() {
    return {
      value: "",
      results: []
    }
  },
  searchAPI: function(string){
    this.setState({results: apiHelpers.searchCity(string).splice(0,3)})
  },
  handleChange(event) {
    this.setState({value: event.target.value})
    this.searchAPI(this.state.value)
  },
  render: function() {
    return (
      <div>
        <SearchInput value={this.state.value} action={this.handleChange} />
        <Results data={this.state.results} />
      </div>
    )
  }
});

var CityName = React.createClass({
  render: function () {
    return (
      <p style={titleStyle} className="city"> {this.props.city} </p>
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

var Cities =  React.createClass({
  render: function(){
    var cityNodes = this.props.data.map(function(city){
      var tempRounded = Math.round(city.data.current_observation.temp_c)
      getBoxStyle(tempRounded)
      return(
        <Masonry
                className="col-md-3"
                elementType={'div'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                style={boxStyle}
                key={city.data.current_observation.display_location.city}>
        < CityName city={city.data.current_observation.display_location.city}/>
        < CityWeather weather={city.data.current_observation.weather}/>
        < CityTemp temperature={tempRounded}/>
        </Masonry>
      );
    });
    return (
      <div>
      {cityNodes}
      </div>
    );
  }
});

var Navbar = React.createClass({
  render: function(){
    return(
      <div>
        <div className="navbar navbar-dark bg-inverse" style={navbar}>
        <CurrentTime UTCOffset="1" />
          <SearchCity />
        </div>
          {this.props.children}
      </div>
    )
  }
});

var Home = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },
  fetchData: function(city) {
    apiHelpers.getCityInfo(city)
    .then(function (response){
      weatherData.push(response)
      this.setState({ data: weatherData
      })
    }.bind(this))
  },
  fetchCurrentLocation: function(){
    apiHelpers.currentLocation()
    .then(function (response){
      this.fetchData(response.data.location.l)
    }.bind(this))
  },
  componentWillMount: function(){
    this.fetchCurrentLocation();
  },
  componentDidMount: function(){
    window.setInterval(function(){
      this.setState({ data: weatherData
      })
    }.bind(this), 1000);
  },
  render: function () {
    return (
      <div>
      <Navbar />
      <Cities data={this.state.data} />
      </div>
    )
  }
});

module.exports = Home;
