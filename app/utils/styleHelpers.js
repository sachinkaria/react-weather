var React = require('react');

var styling = {
  getBoxStyle: function (temperature){
    if (temperature < 5) return {backgroundColor: "#417BFF", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
    else if (temperature < 15) return {backgroundColor: "#799AF4", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
    else if (temperature < 22) return {backgroundColor: "#FFAC63", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
    else if (temperature < 30) return {backgroundColor: "#FF6F39", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
    else return {backgroundColor: "#EA4145", opacity: 0.9, borderRadius:"5px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
  }
};

module.exports = styling;
