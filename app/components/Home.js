var React = require('react');
var styleHelpers = require('../utils/styleHelpers');
var apiHelpers = require('../utils/apiHelpers');
var classNames = require('classnames');
var Masonry = require('react-masonry-component');
var weatherData = [];
var masonryOptions = {transitionDuration: 1};
//current time component
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

    // seconds = currentdate.getUTCSeconds();
    this.setState({
      hours: hours,
      minutes: minutes
      // seconds: seconds
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
      <span style={styleHelpers.cityTime()}>{this.state.hours}:{this.state.minutes}</span>
      </div>
    )
  }
});

// search bar
function SearchInput (props) {
  return (
    <input className="form-control" type="text" placeholder="Search for a City" style={styleHelpers.searchBar()} value={props.value} onChange={props.action}/>
  );
}

//rendering navbar
function Navbar (props){
  return(
    <div>
    <div className="navbar navbar-dark bg-inverse" style={styleHelpers.navbar()}>
    <CurrentTime UTCOffset="1" />
    <SearchCity />
    </div>
    {props.children}
    </div>
  )
}

// rendering all search results and adding a result to cards
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
        <a href="#" key={result.l} style={styleHelpers.dropdowns()} onClick={() => {this.fetchData(urlString)}} className="dropdown-item"> {result.name} </a>
      );
    }.bind(this));
    return (
      <div className="dropdown open">
      <div className="dropdown-menu" style={styleHelpers.dropdowns()}>
      {resultNodes}
      </div>
      </div>
    );
  }
});

//value entered in search bar triggers api with resutls
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

//rendering cityname
function CityName (props) {
  return (
    <p style={styleHelpers.titleStyle()} className="city"> {props.city} </p>
  );
}

//rendering citytemp
function CityTemp (props) {
  return (
    <div style={styleHelpers.weatherStyle()}>
    <span className="temp-number">{props.temperature}&deg;</span>
    </div>
  );
}

//rendering cityweather
function CityWeather (props) {
  var weatherClass = ('wi wi-wu-' + props.weather.replace(/\s/g, '').toLowerCase());
  return (
    <div className="weather" style={styleHelpers.weatherStyle()}>
    <i className={weatherClass}></i>
    </div>
  );
}

//rendering citycards
function Cities (props){
    var cityNodes = props.data.map(function(city){
      var tempRounded = Math.round(city.data.current_observation.temp_c)
      return(
        <Masonry
        className="col-md-3"
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        style={styleHelpers.getBoxStyle(tempRounded)}
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
  };

// homepage component
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
