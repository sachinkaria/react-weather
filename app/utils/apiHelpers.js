var axios = require('axios');
var jsonp = require('jsonp');
var results = [];
var key = "9008e66e5785095f";
var helpers = {
  getCityInfo: function (city){
    return axios.get('https://api.wunderground.com/api/' + key + '/conditions' + city + '.json')
  },
  searchCity: function(string){
      jsonp('https://autocomplete.wunderground.com/aq?query=' + string, { param: 'cb' }, function (err, data) {
        results = (data.RESULTS);
    })
    return results;
  },
  currentLocation: function(){
    return axios.get('http://api.wunderground.com/api/' + key + '/geolookup/q/autoip.json')
  }
};

  module.exports = helpers;
