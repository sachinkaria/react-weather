var React = require('react');

var Navbar = React.createClass({
  render: function(){
    return(
      <div>
        <div className="navbar navbar-default">
          <div className="navbar-brand">Navbar</div>
        </div>
      {this.props.children}
      </div>
    )
  }
});

module.exports = Navbar;
