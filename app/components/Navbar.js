var React = require('react');

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
  render: function() {

    return(
      <div className="city-row" ref="cityRow">
        <span className="city-time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
      </div>
    )
  }
});

var Navbar = React.createClass({
  render: function(){
    return(
      <div>
        <div className="navbar navbar-default">
          <div className="navbar-brand">
          <CurrentTime UTCOffset="1" />
          </div>
        </div>
      {this.props.children}
      </div>
    )
  }
});

module.exports = Navbar;
