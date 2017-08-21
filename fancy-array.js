//playing arround with arrays
var arr = ["James", "Jill", "Jane", "Jack"]
//prompts user for first setting
function symbolParam(){
  var symbol = prompt("Choose what type of spacing: ->, =>, :: , -----");
  return symbol;
}
//prompts user for second setting
function reverseParam(){
  var reversed = prompt("Reverse results: true or false");
  return reversed;
}
//displays array
function fancyArray(symbol, reversed) {
  if (reversed = true) {
    for(var i = arr.length - 1; i >= 0; i--) {
      console.log(i + " " + symbol + " " + arr[i]);
    }
  } else {
    for(var i = 0; i < arr.length; i++) {
      console.log(i + " " + symbol + " " + arr[i]);
    }
  }
}
//calls main function and param settings
fancyArray(symbolParam(), reverseParam());
