console.log("hello to dsa.....");

//Arrays easy:
//1. Max and min element in an array
// let arr = [1, 2, 3, 4, 5];
// let min = arr[0];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   } else if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min, max);

//2. reverse the array
let arr = [1, 2, 3, 6, 8];
//soln1
let revArr = arr.reverse();
console.log(revArr);
//soln2
// let revArr = [];
// for (let i = arr.length - 1; i >= 0; i--) revArr.push(arr[i]);
// console.log(revArr);

//3.maximum subarray
