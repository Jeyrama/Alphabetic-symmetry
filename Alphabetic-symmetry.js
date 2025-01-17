/*
Consider the word "abode". 
We can see that the letter a is in position 1 and b is in position 2. 
In the alphabet, a and b are also in positions 1 and 2. 

Notice also that d and e in abode occupy the 
positions they would occupy in the alphabet, 
which are positions 4 and 5.

Given an array of words, 
return an array of the number of letters that 
occupy their positions in the alphabet for each word. 

For example:
solve(["abode","ABc","xyzD"]) = [4, 3, 1]

Input will consist of alphabet characters, 
both uppercase and lowercase, no spaces.
*/


// Solution

function solve(arr){  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  let final = []
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].toLowerCase() === alphabet[j]) {
        count++;
      }
    }
    final.push(count); 
  }
  return final
};

// or

function solve(arr){  
  let array = new Array();
  arr.forEach(function(value){
    let count = 0
    value.split('').forEach(function(val,index){
      if(val.toLowerCase().charCodeAt()-97===index){
        count++;
      }
        
    });
    array.push(count);
  });
  return array;
  };