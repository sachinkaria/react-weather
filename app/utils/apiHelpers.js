var axios = require('axios');
var key = "9008e66e5785095f";

var helpers = {
  getCityInfo: function (){
    return axios.get('https://api.wunderground.com/api/' + key + '/conditions/q/IN/Pune.json')
  },
  searchCity: function(){
    return axios.get('https://autocomplete.wunderground.com/aq?query=lond' + '&format=JSON')
  }
};

module.exports = helpers;
