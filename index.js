function hasTargetSum(array, target) {
  // Write your algorithm here

   
  for (i=0; i < array.length; i++){
    console.log(array[i]);
    let number = array[i];
    let newArray = array.slice(0, i).concat(array.slice(i + 1));
   console.log(newArray);
    let total="";

    for(j=0; j < newArray.length; j++){
      total = number + newArray[j];
      if (total === target) {
        return true;
      }
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here

O(n^2)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  im taking the array and iterating through it. i copy the array and delete the item. i do another iteration that adds the original number with the other numbers in that are in the new array. returns true is equals the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
