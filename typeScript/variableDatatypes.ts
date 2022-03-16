/*************************************************variables and datatypes**********************************/

// //premitive datatypes

// let username: string = 'John';    //string                                      //variables declaration
// let age: number = 25;             //number
// let active: boolean = true;
// let test1Marks: number = null;      //null
// let test2Marks: number = undefined;  //undefined
// let anotherBin: number = 0B010;      //Binary Number
// let octal: number = 0o10;            //octal
// let big: bigint = 9007199254740991n; //bigInt

// let isUserLogOff: boolean;
// isUserLogOff = true;            //boolean type




// // both type and initial value
// let myName: string = "Shashidhar BC";

// //only the type
// let myAge: number;
// myAge = 23;

// //only the initial values
// let myLocation = "Bangalore";

// // without type and initial value
// let pincode;
// pincode = 560079;




// let firstName: string;
// firstName = `Shashi`;
// let title: string = `FullStack Developer`;
// let profile: string = `I'm ${firstName}. 
// I'm a ${title}`;

// console.log(profile);








// // //Non-premitive datatypes



// let skills: string[];       //array type
// skills[0] = "Problem Solving";
// skills[1] = "Programming";
// skills.push('Software Design');
// let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];       //array declaration

// let scores : (string | number)[];
// scores = ['Programming', 5, 'Software Design', 4];           //array with diff datatypes



// let person: {
//     name: string;
//     age: number
//  };
 
//  person = {                         //object type annotation
//     name: 'John',   
//     age: 25             
//  };                             





//  let greeting : (name: string) => string;           //arrow fuction annotation



//  greeting = function (uname: string) {
//     return `Hi ${uname}`;
// };


// console.log(greeting("shashi"));




// let employee: object;

// employee = {
//     firstName: 'Shashidhar',
//     lastName: 'BC',
//     age: 23,
//     jobTitle: 'FullStack Developer'
// };

// console.log(employee);

// // employee = "Jane";              // error
// // console.log(employee.hireDate); //error







// // enum Type...
// enum Month {Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec     //small set of fixed values
// };
// function isItSummer(month: Month) {
//     let isSummer: boolean;
//     switch (month) {
//         case Month.Jun:
//         case Month.Jul:
//         case Month.Aug:
//             isSummer = true;
//             break;
//         default:
//             isSummer = false;
//             break;
//     }
//     return isSummer;
// }

// console.log(isItSummer(Month.Jan));         // false




// //any type
// let result: any;
// result = 10.123;
// console.log(result.toFixed());
// result.willExist(); 


// //void type
// function log(message): void {       //it will not return any thing..
//     console.log(message);
// }


// // alias type
// type alphanumeric = string | number;
// let input: alphanumeric;
// input = 100; // valid
// input = 'Hi'; // valid
// // input = false; // Compiler error



// // String Literal types
// let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
// mouseEvent = 'click'; // valid
// mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mouseup'; // valid
// mouseEvent = 'mousedown'; // valid
// // mouseEvent = 'mouseover'; // compiler error






// // sample program:-----

// function welcomePerson(person:Person){
//     console.log(`Hello, ${person.firstName} ${person.lastName}`);
// }

// let shashi = {
//     firstName: "Shashidhar",
//     lastName: "BC"
// }
// welcomePerson(shashi);


// interface Person {
//     firstName: string,
//     lastName: string,
// }



//operators in type script:-----

// airthmetic operators: +, -, *, /, %, ++, --, **
//assignment operator: +=, -=, *=, /=...etc
//Relational/comparision operator: ==, ===, !=, !==, <, >, <=, >=, ?
// Logical operator: &&, ||, !







/*************************************string methods********************************************/

// let string1: string = "Shashidhar joined Vlinder";  // charAt() method
// console.log(string1.charAt(5));   //outputs: i

// let string2: string = "at Bangalore";
// console.log(string1.concat(string2));

// console.log(string1.replace('i', 'a'));
// console.log(string1.replace('Shashidhar', 'Gangadhar')); // replace() method

// console.log(string1.split(' '));            //[ 'Shashidhar', 'joined', 'Vlinder' ] ------ split() method


// console.log(string1.substring(1, 5));       //output: hash ------ substring() method 

// console.log(string1.toUpperCase());       //toUpperCaes() method   ------ outputs: SHASHIDHAR JOINED VLINDER

// console.log(string2.toLowerCase()); //toLowerCaes() method ------- outputs: at bangalore


// let string3: string = "     welcome     "
// console.log(string3.trim());                //trim() method
// console.log(string3.trimRight());           //trimRight() method
// console.log(string3.trimLeft());            //trimLeft() method


