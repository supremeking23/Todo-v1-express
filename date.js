//jshint esversion:6

module.exports.getDate = function(){
  let today = new Date();
  let day = "";
  //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  let options = {
    weekday : "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };


  return today.toLocaleDateString("en-US",options);

}


exports.getDay = () => {
  let today = new Date();
  let day = "";
  //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  let options = {
    weekday : "long",
    // year: "numeric",
    // month: "long",
    // day: "numeric",
  };


  return today.toLocaleDateString("en-US",options);

}
