function checkNumbers (array) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === array[i-1]) {
      return false;
    }
  }
  return true;
}

function randomNumberGenerator (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomNumbers (array, k) {
  let arr = [];
  let num;  
  for (let i=0; i<k; i++) { 
    let rand = randomNumberGenerator(array.length - 1);
    num = array[rand];
    arr.push(num);
    arr.sort();
    if (checkNumbers(arr) === false) {
      
    }
  }
  return arr;
}

console.log(randomNumbers([10, 20, 30, 55, 33, 44, 55], 3));


//   console.log(arr)

//   for (let j=1; j<=arr.length; j++) {
//     if (arr[j] === arr[j - 1]) {
//       result = [...new Set(arr)]
//       console.log(result)
//   } else {
//     return arr
//   }
// }