var axios = require('axios');
var jsonp = require('jsonp');

var key = "9008e66e5785095f";

var helpers = {
  getCityInfo: function (){
    return axios.get('https://api.wunderground.com/api/' + key + '/conditions/q/IN/Pune.json')
  },
  searchCity: function(){
    return jsonp('https://autocomplete.wunderground.com/aq?query=lond', { param: 'cb' }, function (err, data) {
        console.log(data.RESULTS);
    })
  }
};

  module.exports = helpers;
