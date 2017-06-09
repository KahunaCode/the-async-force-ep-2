console.log("works");

// var buttonValue = document.getElementById("resourceType");
// console.log(buttonValue);

var button = document.getElementById("requestResourceButton");
button.addEventListener("click", director);

//switch function based on buttonValue
function director(){
  var buttonValue = document.getElementById("resourceType").value;
  //console.log(buttonValue);
  var number = document.getElementById("resourceId").value;
  //console.log(number);
  if (number == 2){
    console.log("twooooo");
  }
}