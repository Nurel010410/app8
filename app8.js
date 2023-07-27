//  let second_greatest_lowest = (arr_num) => {
    
//     let sortedArr = Array.from(new Set(arr_num)).sort((a, b) => a - b);
  
   
//     if (sortedArr.length < 2) {
//       return undefined;
//     }
  
//     let secondSmallest = sortedArr[1];
//     let secondLargest = sortedArr[sortedArr.length - 2];
  
//     return [secondSmallest, secondLargest];
//   }
//   //_______________________________________________________________________________

//   let numbers = [4, 2, 10, 5, 1, 8];
//   let result = second_greatest_lowest(numbers);
//   console.log(result);

// let qwerty = value => typeof value;
// console.log(qwerty('Hello')); 
// console.log(qwerty(42));
// console.log(qwerty(true));
// console.log(qwerty([]));
// console.log(qwerty(null)); 
// console.log(qwerty(undefined))