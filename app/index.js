var React = require('react');
var ReactDOM = require('react-dom');
var apiHelpers = require('./utils/apiHelpers')
var routes = require('./config/routes')

ReactDOM.render(
  routes,
  document.getElementById('app')
);

// var CityName = React.createClass({
//   render: function () {
//     return (
//       <h1> {this.props.city} </h1>
//     );
//   }
// });
//
// var CityTemp = React.createClass({
//   render: function () {
//     return (
//       <h2> Temperature - {this.props.temperature}&deg;C </h2>
//     );
//   }
// });
//
// var CityWeather = React.createClass({
//   render: function () {
//     return (
//       <h2> Weather - {this.props.conditions} </h2>
//     );
//   }
// });
//
// var CityHumidity = React.createClass({
//   render: function () {
//     return (
//       <h2> Humidity {this.props.humidity} </h2>
//     );
//   }
// });
//
// var Weather = React.createClass({
//   getInitialState: function() {
//     return {
//       city: '',
//       conditions: '',
//       temperature: 0,
//       humidity: 0,
//       wind: 0,
//     }
//   },
//   fetchData: function() {
//       apiHelpers.getCityInfo()
//       .then(function (response){
//         console.log(response)
//         this.setState({
//           city: response.data.location.city,
//           conditions: response.data.current_observation.weather,
//           temperature: response.data.current_observation.temp_c,
//           humidity: response.data.current_observation.relative_humidity,
//         })
//       }.bind(this))
//     },
//   componentWillMount: function(){
//     this.fetchData();
//   },
//   render: function () {
//     return (
//       <div>
//         < CityName city={this.state.city}/>
//         < CityTemp temperature={this.state.temperature}/>
//         < CityWeather conditions={this.state.conditions}/>
//         < CityHumidity humidity={this.state.humidity}/>
//       </div>
//     )
//   }
// })
//
// ReactDOM.render(<Weather />, document.getElementById('app'));
