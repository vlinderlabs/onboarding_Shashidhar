





// alarm times in week...using if,else if,else statements

// let day = "thursday";

// if(day === "monday"){
//     console.log("alarm is at \'7am\'");

// }
// else if((day === "tuesday") || (day === "wednesday") || (day === "thursday")){
//     console.log("alarm is at \'4am\'");

// }

// else if((day === "saturday") || (day === "sunday")){
//     console.log("alarm is at \'8am\'");

// }




// const s1 = prompt("string 1");
// const s2 = prompt("string 2");
// const s1p1 = s1.charAt(0);
// const s1p2 = s1.substring(1);
// const s2p1 = s2.charAt(0);
// const s2p2 = s2.substring(1);
// if(s1p1 == s1p1.toUpperCase() && s1p2 == s1p2.toLowerCase()){
//     alert("valid");

// }
// else{
//     alert("invalid");
// }









/********************************************** While-loop && do-while_loop*********************************/

// let num1 = 564782;
// let num2 = 0;
// while(num1 > 0){
//     num2 = num1 % 10;
    
//     num1 = parseInt(num1/10);

// }



// let age = 25;
// do{
//     console.log("your current age: " ,age);
//     age += 1;
// }while(age <= 35)





// // using switch statement...
// function alarmOn(day){
//     switch(day){
//         case "monday":
//             console.log("alarm is at 7am");
//             break;
        
//         case "tuesday":
//             console.log("alarm is at 4am");
//             break;
    
//         case "wednesday":
//             console.log("alarm is at 4am");
//             break;  
//         case "thursday":
//             console.log("alarm is at 4am");
//             break;
        
//         case "friday":
//             console.log("alarm is at 9am");
//             break;
        
//         case "saturday":
//             console.log("alarm is at 8am");
    
//         case "sunday":
//             console.log("alarm is at 8am");
//             break;
    
//         default:
//             console.log("you have entered wrong day");
//             break;
// }
// }

// alarmOn("friday");







/*********************************************implicit conversions*****************************************8*/
// numeric string used with + gives string type
// let result;

// result = '3' + 2; 
// console.log(result) // "32"

// result = '3' + true; 
// console.log(result); // "3true"

// result = '3' + undefined; 
// console.log(result); // "3undefined"

// result = '3' + null; 
// console.log(result); // "3null"





// numeric string used with - , / , * results number type

// let result;

// result = '4' - '2'; 
// console.log(result); // 2

// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// result = '4' / 2;
// console.log(result); // 2





// non-numeric string used with - , / , * results to NaN

// let result;

// result = 'hello' - 'world';
// console.log(result); // NaN

// result = '4' - 'hello';
// console.log(result); // NaN






// if boolean is used, true is 1, false is 0

// let result;

// result = '4' - true;
// console.log(result); // 3

// result = 4 + true;
// console.log(result); // 5

// result = 4 + false;
// console.log(result); // 4




// null is 0 when used with number
// let result;

// result = 4 + null;
// console.log(result);  // 4

// result = 4 - null;
// console.log(result);  // 4






// Arithmetic operation of undefined with number, boolean or null gives NaN

// let result;

// result = 4 + undefined;
// console.log(result);  // NaN

// result = 4 - undefined;
// console.log(result);  // NaN

// result = true + undefined;
// console.log(result);  // NaN

// result = null + undefined;
// console.log(result);  // NaN







/****************************************explicit conversion************************************************/

// let result;

// // string to number
// result = Number('324');
// console.log(result); // 324

// result = Number('324e-1')  
// console.log(result); // 32.4

// // boolean to number
// result = Number(true);
// console.log(result); // 1

// result = Number(false);
// console.log(result); // 0


// let result;
// result = Number(null);
// console.log(result);  // 0

// let result = Number(' ')
// console.log(result);  // 0




// let result;
// result = Number('hello');
// console.log(result); // NaN

// result = Number(undefined);
// console.log(result); // NaN

// result = Number(NaN);
// console.log(result); // NaN




// let result;
// result = parseInt('20.01');
// console.log(result); // 20

// result = parseFloat('20.01');
// console.log(result); // 20.01

// result = +'20.01';
// console.log(result); // 20.01

// result = Math.floor('20.01');
// console.log(result); // 20



//number to string
// let result;
// result = String(324);
// console.log(result);  // "324"

// result = String(2 + 4);
// console.log(result); // "6"

// //other data types to string
// result = String(null);
// console.log(result); // "null"

// result = String(undefined);
// console.log(result); // "undefined"

// result = String(NaN);
// console.log(result); // "NaN"

// result = String(true);
// console.log(result); // "true"

// result = String(false);
// console.log(result); // "false"

// // using toString()
// result = (324).toString();
// console.log(result); // "324"

// result = true.toString();
// console.log(result); // "true"



// let result;
// result = Boolean('');
// console.log(result); // false

// result = Boolean(0);
// console.log(result); // false

// result = Boolean(undefined);
// console.log(result); // false

// result = Boolean(null);
// console.log(result); // false

// result = Boolean(NaN);
// console.log(result); // false



// result = Boolean(324);
// console.log(result); // true

// result = Boolean('hello');
// console.log(result); // true

// result = Boolean(' ');
// console.log(result); // true








