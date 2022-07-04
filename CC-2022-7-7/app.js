// Description:
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).



// first attempt 

// p(parameters): function that takes in that takes in an array.Need to consider caps or non caps. 
// r(return):return either "Even" for even numbers or "Odd" for an odd number
// e(example):
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  Correct Answer:17 
// p():write a function that takes in array. the function needs to cycle through the array and process what's in the array. if a true appears the function counts that word. If the word is not true than the function skips that word. THen the function will add all the trues and will count all the trues. 

function countSheeps(arrayOfSheep){
// let sheep = 0 
let numberOfSheep.forEach(e =>{
  if (arrayOfSheep === 'true'|| 'True'){
    arrayOfSheep.reduce(p,c) => p + c, 0
  }else{
    continue
  }
  
  }
}

// Did not succeed. I wasn't too positive on the whether to use "for each" or "reduce" or "if and else" or whether I should you all the above.


