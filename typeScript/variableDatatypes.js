// /*************************************************variables and datatypes**********************************/
// // //premitive datatypes
// var username = 'John'; //string                                      //variables declaration
// var age = 25; //number
// var active = true;
// var test1Marks = null; //null
// var test2Marks = undefined; //undefined
// var anotherBin = 2; //Binary Number
// var octal = 8; //octal
// var big = 9007199254740991n; //bigInt
// var isUserLogOff;
// isUserLogOff = true; //boolean type
// // both type and initial value
// var myName = "Shashidhar BC";
// //only the type
// var myAge;
// myAge = 23;
// //only the initial values
// var myLocation = "Bangalore";
// // without type and initial value
// var pincode;
// pincode = 560079;
// var firstName;
// firstName = "Shashi";
// var title = "FullStack Developer";
// var profile = "I'm ".concat(firstName, ". \nI'm a ").concat(title);
// console.log(profile);
// // //Non-premitive datatypes
// var skills; //array type
// skills[0] = "Problem Solving";
// skills[1] = "Programming";
// skills.push('Software Design');
// var names = ['John', 'Jane', 'Peter', 'David', 'Mary']; //array declaration
// var scores;
// scores = ['Programming', 5, 'Software Design', 4]; //array with diff datatypes
// var person;
// person = {
//     name: 'John',
//     age: 25
// };
// var greeting; //arrow fuction annotation
// greeting = function (uname) {
//     return "Hi ".concat(uname);
// };
// console.log(greeting("shashi"));
// var employee;
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
// var Month;
// (function (Month) {
//     Month[Month["Jan"] = 0] = "Jan";
//     Month[Month["Feb"] = 1] = "Feb";
//     Month[Month["Mar"] = 2] = "Mar";
//     Month[Month["Apr"] = 3] = "Apr";
//     Month[Month["May"] = 4] = "May";
//     Month[Month["Jun"] = 5] = "Jun";
//     Month[Month["Jul"] = 6] = "Jul";
//     Month[Month["Aug"] = 7] = "Aug";
//     Month[Month["Sep"] = 8] = "Sep";
//     Month[Month["Oct"] = 9] = "Oct";
//     Month[Month["Nov"] = 10] = "Nov";
//     Month[Month["Dec"] = 11] = "Dec"; //small set of fixed values
// })(Month || (Month = {}));
// ;
// function isItSummer(month) {
//     var isSummer;
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
// console.log(isItSummer(Month.Jan)); // false
// //any type
// var result;
// result = 10.123;
// console.log(result.toFixed());
// result.willExist();
// //void type
// function log(message) {
//     console.log(message);
// }
// var input;
// input = 100; // valid
// input = 'Hi'; // valid
// // input = false; // Compiler error
// // String Literal types
// var mouseEvent;
// mouseEvent = 'click'; // valid
// mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mouseup'; // valid
// mouseEvent = 'mousedown'; // valid
// // mouseEvent = 'mouseover'; // compiler error
// // sample program:-----
// function welcomePerson(person) {
//     console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName));
// }
// var shashi = {
//     firstName: "Shashidhar",
//     lastName: "BC"
// };
// welcomePerson(shashi);
// //operators in type script:-----
// // airthmetic operators: +, -, *, /, %, ++, --, **
// //assignment operator: +=, -=, *=, /=...etc
// //Relational/comparision operator: ==, ===, !=, !==, <, >, <=, >=, ?
// // Logical operator: &&, ||, !
// /*************************************string methods********************************************/
// var string1 = "Shashidhar joined Vlinder"; // charAt() method
// console.log(string1.charAt(5)); //outputs: i
// var string2 = "at Bangalore";
// console.log(string1.concat(string2));
// console.log(string1.replace('i', 'a'));
// console.log(string1.replace('Shashidhar', 'Gangadhar')); // replace() method
