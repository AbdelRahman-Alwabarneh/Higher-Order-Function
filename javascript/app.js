// let MasterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let Array2 = [];
// for (let i = 0; i < MasterArray.length; i++) {
//   Array2.push(Math.pow(2, MasterArray[i]));
// }
// console.log(Array2);

// MasterArray.forEach((element) => {
//   Array2.push(Math.pow(2, element));
//   console.log(Array2[Array2.length - 1]);
// });

// let Array2 = MasterArray.map((element) => {
//   return Math.pow(2, element);
// });
// console.log(Array2);

// let MasterArrayEx2 = [1, 2, 3, "ABOOD", 2, "1ABOOD1", 1, 10, 9, ""];
// let ArrayEx2 = MasterArrayEx2.map((element) => {
//   if (typeof element == "string") {
//     return "N/A";
//   } else if (element % 2 !== 0) {
//     return "odd";
//   } else if (element % 2 == 0) {
//     return "even";
//   }
// });
// console.log(ArrayEx2);

// let MasterArrayEx3 = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

// MasterArrayEx3.forEach((element) => {
//   console.log(element);
// });

// const MasterArrayEx4 = [1, 3, 5, 15, 20, 30];
// const arrrr = MasterArrayEx4.map(function firstBuzz(element) {
//   if (element % 5 === 0 && element % 3 === 0) {
//     return "Fizz Buzz";
//   } else if (element % 3 === 0) {
//     return "Fizz";
//   } else if (element % 5 === 0) {
//     return "Buzz";
//   } else {
//     return element;
//   }
// });
// console.log(arrrr);
