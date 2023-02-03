// // even Number

// console.log(4%2);
// console.log(9%2);
// console.log(6098%2);
// console.log(966%2);

// //odd  number

// console.log(5/2);
// console.log(97/2);
// console.log(6099/2);
// console.log(965/2);

// find a even Number

function isEvenOrNot(number){
  const reminder = number % 2;
//   return reminder; system=1
//    console.log(reminder);
   if(reminder===0){
    // console.log('number in even') system-2
    return true;
   }

   else{
    // console.log('number is odd') system-2
    return false;

   }
}

// const number =83;
// const result1 = isEvenOrNot(number);
// console.log(result1);

const my =isEvenOrNot(99) ;
console.log(my);
const her =isEvenOrNot(98);
console.log(her);

// isEvenOrNot(990);