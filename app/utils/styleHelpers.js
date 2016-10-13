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
cityTime:function(){
  return {color: "White",
  float: "right",
  fontSize: "50px"
  }
},
dropdowns:function(){
  return {color: "White",
          backgroundColor: "#222",
          float: "left",
          fontSize: "20px",
          marginRight: "30px",
          textAlign: "center"
  }
},
searchBar:function(){
  return {backgroundColor: "#373737",
          borderColor:"#373737",
          color:"white",
          fontSize: "20px"
  }
},
titleStyle:function(){
  return {color:"white",
          textAlign:"center",
          minWidth:"100%",
          maxWidth:"100%",
          padding:"20px",
          fontSize:"40px"
  }
},
navbar:function(){
  return {marginBottom: "50px"}
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
