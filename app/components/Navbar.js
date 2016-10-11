var React = require('react');
var apiHelpers = require('../utils/apiHelpers')

var cityTime = {color: "White",
                  float: "right",
                fontSize: "50px"};

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
  render: function(){
    console.log(this.props.data)
    var resultNodes = this.props.data.map(function(result){
      return(
      <a className="dropdown-item"> {result.name} </a>
    );
  });
    return (
      <div>
      {resultNodes}
      </div>
    );
  }
});

var SearchInput = React.createClass({
  render: function () {
    return (
      <input className="form-control" type="text" value={this.props.value} onChange={this.props.action}/>
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
    this.setState({results: apiHelpers.searchCity(string).splice(1,3)})
    console.log(this.state.results)
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

var Navbar = React.createClass({
  render: function(){
    return(
      <div>
        <div className="navbar navbar-dark bg-inverse">
        <SearchCity />
        <CurrentTime UTCOffset="1" />
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Navbar;
