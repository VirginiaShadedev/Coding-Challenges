// Description:

//We need a function that can transform a string into a number. What ways of achieving this do you know?


// First attempt 

// p(parameters): Function has to take in string. 
// r(return):Function spits out a number. 
// e(example):
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
// p():  Create a function. Use JS to convert string to number. Lastly return number.

const stringToNumber = function (str){
  return null - '';
}


// notes on how you failed or succeeded. 

// First attempt was a failure. The attempt was based on a previous code challenge that asked to create a function from number to string. The idea was that it would work the same but it failed.  

// Second Attempt

const stringToNumber = function(str){
  
  return Number(str)
}
// notes on how you failed or succeeded.
// The attempt was to reverse the method that was attempted using number to string.The following method. 

function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

// I wasn't sure that 

Number

// was a thing, but alas it was. 


// OTHER POSSIBLE SOLUTIONS 
// Example 1 
var stringToNumber = function(str){
  return parseInt(str);
}
// In this example I can possibly use 
parseInt
// from what I understand this converts its first argument to a string, parses the string, then returns an integer. This essentially gives us the number with no strings. 

// Example 2

// Another method can be 

var stringToNumber = Number;

// This one is straight to the point. That you want a number as a return. 

// Example 3 

// Another method can be

const stringToNumber = function(str){return Number(str)}

// This method was not as simple as the previous methods, but I can see that it the paranthesis around the str can retract the string and just provide the number. 



  