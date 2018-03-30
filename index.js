
var katzDeli = [];

var katzDeliLine = [];

function takeANumber(array, name){
  var num = array.length + 1;
  var s = `Welcome, ${name}. You are number ${num} in line.`;
  
  return s;
  
}

//return the first person in line and remove 'em
//if there is nobody in line return "there is nobody waiting to be served!
function nowServing(){
  
}


function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty.";
  }
    else
      var s = [];
      for (var i=0; i < array.length; i++){
      s[i] = i + 1;  
      s.push(array[i]);
      
      }
      return "The line is currently: " + s;
  
}