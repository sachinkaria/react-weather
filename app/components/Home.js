var React = require('react');
var apiHelpers = require('../utils/apiHelpers')

var dataDump = [
  {data:{current_observation:
    {display_location:
      {city: 'London'},
      temp_c: 10,
      weather: "Sunny",
      humidity: '85%'
    }
  }
},
{data:{current_observation:
  {display_location: {city: 'New York'},
  temp_c: 22,
  weather: "Sunny",
  humidity: '50%'
}
}
}
];

var CityName = React.createClass({
  render: function () {
    return (
      <h1> {this.props.city} </h1>
    );
  }
});

var CityTemp = React.createClass({
  render: function () {
    return (
      <h2> Temperature - {this.props.temperature}&deg;C </h2>
    );
  }
});

var CityWeather = React.createClass({
  render: function () {
    return (
      <h2> Weather - {this.props.conditions} </h2>
    );
  }
});

var CityHumidity = React.createClass({
  render: function () {
    return (
      <h2> Humidity {this.props.humidity} </h2>
    );
  }
});

var Cities =  React.createClass({
  render: function(){
    var cityNodes = this.props.data.map(function(city){
      return(
        <div className="col-sm-6">
        < CityName city={city.data.current_observation.display_location.city}/>
        < CityTemp temperature={city.data.current_observation.temp_c}/>
        < CityWeather conditions={city.data.current_observation.weather}/>
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
      city: '',
      conditions: '',
      temperature: 0,
      humidity: 0,
      wind: 0,
    }
  },
  fetchData: function() {
    apiHelpers.getCityInfo()
    .then(function (response){
      this.setState({ data: dataDump
      })
    }.bind(this))
  },
  componentWillMount: function(){
    this.fetchData();
  },
  render: function () {
    console.log(dataDump)
    return (
      <div className="container">
      <h1>Favorites</h1>
      <Cities data={dataDump} />
      </div>
    )
  }
});

module.exports = Home;
