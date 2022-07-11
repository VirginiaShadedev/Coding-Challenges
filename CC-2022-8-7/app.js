// Description:
//We need a function that can transform a number into a string. What ways of achieving this do you know?




// First attempt 

// p(parameters): Function takes in number and spits out string. 
// r(return):It will return a string
// e(example):
// 123 --> "123"
// 999 --> "999"
// p(): Create a function numberToString(num) function will take in a number and will return a string. We will be using preset javascript .toString to achieve this function. 

function numberToString(num){
 return num.toString()
}

// notes on how you failed or succeeded. 

// The key to succeeding this code challenge is using .toString in order to take in number and return a string. 

// OTHER POSSIBLE SOLUTIONS 
// Example 1 

function numberToString(num) {
    // Return a string of the number here!
    return String(num);
  }
  
//   I find this solution very easy to understand. You simply use
 String (num)
//  and this is straing to the point. You need a string to every num. So the function will return just that a string to every num. Straight to the point. 
 
