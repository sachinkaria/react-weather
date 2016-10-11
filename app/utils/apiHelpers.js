var axios = require('axios');
var jsonp = require('jsonp');

var key = "9008e66e5785095f";

var helpers = {
  getCityInfo: function (city){
    return axios.get('https://api.wunderground.com/api/' + key + '/conditions' + city + '.json')
  },
  searchCity: function(){
    jsonp('https://autocomplete.wunderground.com/aq?query=lond', { param: 'cb' }, function (err, data) {
        return (data.RESULTS);
    })
  },
  currentLocation: function(){
    return axios.get('http://api.wunderground.com/api/' + key + '/geolookup/q/autoip.json')
  }
};

  module.exports = helpers;
