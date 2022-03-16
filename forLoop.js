

/**************************************************11/02/2022***********************************************/
/**********************************************************************************************8************/

/***********************************************For-Loop****************************************************/

// let i = 1
// for(;i<=5;){
//     console.log(`The number is: ${i}`);
//     i++;
// }




/********************************year with months ----> using for loop**************************************/

// const numOfMonths = 12;
// for(let year=2024;year<=2024;year++){
//     console.log(`The ${year} year has following months:`);
    
//     for(let j=1;j<=numOfMonths;j++){
//         switch(j){
//             case j=1:
//                 console.log("january");
//                 break;
//             case j=2:
//                 console.log("february");
//                 break;
//             case j=3:
//                 console.log("march");
//                 break;
//             case j=4:
//                 console.log("april");
//                 break;
//             case (j=5):
//                 console.log("may");
//                 break;
//             case j=6:
//                 console.log("june");
//                 break;
//             case j=7:
//                 console.log("july");
//                 break;
//             case j=8:
//                 console.log("august");
//                 break;
//             case j=9:
//                 console.log("september");
//                 break;
//             case j=10:
//                 console.log("october");
//                 break;
//             case j=11:
//                 console.log("november");
//                 break;
//             case j=12:
//                 console.log("december");
//                 break;
//         }

//     }
// }



// doubt 1: cleared
// for(var i = 0;i<5;i++){                     //outputs number 0...4
//     console.log("The number is: " , i);    //it supports concatenation of string with number i.e. it converts number to string 
// }                                           //type coercion 






/**********************************************template literal*********************************************/

// let a = 5;     
// let b = 4;
// let c = a + b;
// console.log(`The addition of a & b is: ${c}`);     //     ` ` backtick symbol

// console.log(`My name is:
// Shashidhar B Challamarada`);













/**************************************************javascript Labels*****************************************/



// let studentMarks = [87, 87, 34, 78, 89, 98];
// let totalMarks = 0;
// let response = false;

// compute_marks:         //label_name
// if(studentMarks.length > 0){
//     for(let i = 0;i < studentMarks.length;i++){
//         if(isNaN(studentMarks[i])){
//             break compute_marks;      // breaking the label loop
//         }else{
//             totalMarks += studentMarks[i]; 
//         }
//     }
//     response = true;
// }
// if(response){
//     percentage = totalMarks/6;
//     console.log(`The Total marks of student is: ${totalMarks} and percentage is: ${percentage}%`);
// }
// else{
//     console.log("You are missing marks!!!...");
// }





// var s = [];
// s[0] = 1;
// s[1] = 2;
// s[8] = 8;    // outputs: [ 1, 2, <6 empty items>, 8 ]
// s[5] = 5;

// console.log(s);  // outputs: [ 1, 2, <3 empty items>, 5, <2 empty items>, 8 ]




