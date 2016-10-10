var axios = require('axios');
var key = "9008e66e5785095f";

var helpers = {
  getCityInfo: function (){
    return axios.get('https://api.wunderground.com/api/' + key + '/conditions/q/MA/Boston.json')
  }
};

module.exports = helpers;
