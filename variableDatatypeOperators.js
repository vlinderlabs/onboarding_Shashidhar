// var name = "shahi";  //string
// var age = 21;        //Number
// var bool = false;    //Boolean
// var number = null;              //var keyword
// var clgName = undefined;


// let message;                    //let keyword
// message = "Hello"; 
// message = "World";





// const name = "shashi";

// name = "dhar";              //TypeError: Assignment to constant variable.










/***********************************Operators*************************************************************/


//Arithmetic Operators(+)

// let netPrice    = 9.99,
//     shippingFee = 1.99;
// let grossPrice  = netPrice + shippingFee;           //addition Operators

// console.log(grossPrice);




// let netPrice = grossPrice - shippingFee;            // Subtraction operator (-)





// let result = 2 * 3;
// console.log(result);            //Multiplication operator (*)

// The formula for area of equilateral triangle : 0.43301 * a * a
// const value = 0.43301;
// let a = 2;
// areaOfEqiTri = value * a * a ;
// console.log(areaOfEqiTri);



// // The formula for area of circle : pi * rad * rad
// const pi = 3.14;
// let rad = 4
// // pi = 7;

// areaOfCircle = pi * rad * rad;
// console.log("area of circle is: ",areaOfCircle);









// let result = 20 / 10;

// console.log(result); // 2           //Divide operator (/)




// let energy = {
//     valueOf() {
//       return 100;
//     },
//   };
  
//   let currentEnergy = energy - 10;
//   console.log(currentEnergy);
  
//   currentEnergy = energy + 100;
//   console.log(currentEnergy);
  
//   currentEnergy = energy / 2;
//   console.log(currentEnergy);
  
//   currentEnergy = energy * 1.5;
//   console.log(currentEnergy);
  







// //remainder operator

// let remainder = 5 % -2;
// console.log(remainder); // 1

// remainder = 5 % 2;
// console.log(remainder); // 1


// let remainder = -5 % 3;
// console.log(remainder); // -2

// remainder = -5 % -3;
// console.log(remainder); // -2


// let remainder = Infinity % 2;
// console.log(remainder); // NaN





// //assignment operator

// let counter = 0;
// counter = counter + 1;  // = operator

// let a = 10, b = 20, c = 30;
// a = b = c; // all variables are 30


// let a = 10, b = 20, c = 30;

// b = c; // b is 30
// a = b; // a is also 30 






// //Increment / Decrement operators

// let age = 25;
// ++age;

// console.log(age); // 26




// let age = 25;
// age = age + 1;
// console.log(age); // 26



// let weight = 90;
// --weight;

// console.log(weight); // 89



// let weight = 90;
// weight = --weight + 5;

// console.log(weight); // 94




// JavaScript Comparison Operators

// let r1 = 20 > 10; // true
// let r2 = 20 < 10; // false
// let r3 = 10 == 10; // true

// let a = 10, 
//     b = 20; 

// console.log(a >= b);  // false
// console.log(a == 10); // true

// let name1 = 'alice',
//     name2 = 'bob';    

// let result = name1 < name2;
// console.log(result); // true
// console.log(name1 == 'alice'); // true



// console.log(null == undefined); // true


// console.log(NaN == 1); // false

// console.log(NaN == NaN); // false

// console.log(NaN != 1); // true

// console.log(NaN != NaN); // true





// Logical NOT operator (!)

// let eligible = false,
//     required = true;

// console.log(!eligible);
// console.log(!required);


// console.log(!undefined); // true
// console.log(!null); // true
// console.log(!20); //false
// console.log(!0); //true
// console.log(!NaN); //true
// console.log(!{}); // false
// console.log(!''); //true
// console.log(!'OK'); //false
// console.log(!false); //true
// console.log(!true); //false




// Logical AND operator (&&)

// let eligible = false,
//     required = true;

// console.log(eligible && required); // false



// Logical OR operator (||)

// let eligible = true,
//     required = false;

// console.log(eligible || required); // true




// Logical OR assignment operator

// let title;
// title ||= 'untitled';

// console.log(title);
