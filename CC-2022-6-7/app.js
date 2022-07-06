// Description:
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.





// first attempt 

// p(parameters): 
// r(return):return either "Even" for even numbers or "Odd" for an odd number
// e(example):2:even
// e: 1:Odd
// e: 7:Odd
// p():Function takes in integer as an argumnet and returns "even" or "odd" depending on the integer listed. 

function even_or_odd(n) {
    if(n % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
};


