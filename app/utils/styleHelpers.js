var React = require('react');

var styling = {
  weatherStyle:function(){
    return {color: "White",
    fontSize: "70px",
    margin:"0 auto",
    maxWidth: "100%",
    minWidth:"100%",
    maxHeight:"50%",
    float:"left",
    textAlign: "center",
    paddingBottom: "10px"
    }
  },
  getBoxStyle: function (temperature){
    if (temperature < 5) return {backgroundColor: "#417BFF", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
    else if (temperature < 15) return {backgroundColor: "#799AF4", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
    else if (temperature < 22) return {backgroundColor: "#FFAC63", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
    else if (temperature < 30) return {backgroundColor: "#FF6F39", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
    else return {backgroundColor: "#EA4145", opacity: 0.9, borderRadius:"5px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}
  }
};

module.exports = styling;
