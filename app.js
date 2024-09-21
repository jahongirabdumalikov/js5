// function isComposite(num) {
//     if (num < 4) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return true; 
//     }
//     return false; 
// }
// const compositeNumbers = [];
// for (let i = 1; i <= 50; i++) {
//     if (isComposite(i)) {
//         compositeNumbers.push(i);
//     }
// }
// console.log(compositeNumbers);


// /////////////////  2  ////////////////////


// let num = 1122334; 
// let digitCount = {};
// String(num).split('').forEach(digit => {
//     digitCount[digit] = (digitCount[digit] || 0) + 1;
// });
// let sum = 0;
// for (let digit in digitCount) {
//     if (digitCount[digit] > 1) {
//         sum += parseInt(digit);
//     }
// }
// console.log(sum); 


// /////////////////  3  ///////////////////


// let n = 8; 
// let oddNumbers = [];
// for (let i = 1; i < n; i++) {
//     if (i % 2 !== 0) {
//         oddNumbers.push(i);
//     }
// }
// console.log(oddNumbers.join(', ')); 


// ///////////////////  4  ////////////////////


// let cubes = [];
// for (let i = 1; i <= 10; i++) {
//     cubes.push(i ** 3);
// }

// console.log(cubes.join(', ')); 


// //////////////  5  ////////////////////////


// let num = 123; 
// let reversedNum = String(num).split('').reverse().join('');
// console.log(reversedNum); 
