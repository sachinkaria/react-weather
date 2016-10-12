getBoxStyle: function (temperature){
  if (temperature < 5) {boxStyle = {backgroundColor: "#417BFF", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}}
  else if (temperature < 15) {boxStyle = {backgroundColor: "#799AF4", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}}
  else if (temperature < 22) {boxStyle = {backgroundColor: "#FFAC63", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}}
  else if (temperature < 30) {boxStyle = {backgroundColor: "#FF6F39", opacity: 0.9, borderRadius:"5px", minHeight:"300px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}}
  else {boxStyle = {backgroundColor: "#EA4145", opacity: 0.9, borderRadius:"5px", borderStyle:"solid", borderColor:"#222", borderThickness:"thin"}}
};

module.exports = getBoxStyle;
