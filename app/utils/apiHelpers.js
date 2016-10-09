var axios = require('axios');

var key = "9008e66e5785095f";

function getCityInfo (){
  return axios.get('http://api.wunderground.com/api/' + key + 'conditions/q/CA/San_Francisco.json' )
}

var helpers = {
  getWeatherInfo: function(cities){
    return.axios.all(player.map(function(city){
      return getCityInfo(city)
    })).then(function(response){
      console.log(response);
    })
  }
}

module.exports = helpers;
