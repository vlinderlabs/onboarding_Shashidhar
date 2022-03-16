// let alien = {           
//     name: "shashi",
//     tech: "python",
//     laptop: {               //complex object...
//         cpu: "i5",
//         ram: "8gb",

//     }
// }
// alien.tech = "js";           //reference values allows u to add,change and delete properties at any time.

// console.log(alien.laptop?.cpu?.length);      //operational chaining operator...

// // delete alien.laptop;
// // console.log(alien);



// let alien = new Object();
// alien.name = "shashi";
// alien.tech = "python";
// alien.laptop = {};
// console.log(alien.laptop);







// let laptop1 = {
//     cpu: "i5",
//     ram: "8gb",
//     compare: function(other){
//         if(this.cpu > other.cpu)
//             console.log(laptop1);
//         else
//             console.log(laptop2);
//     }

// }
// let laptop2 = {
//     cpu: "i7",
//     ram: "6gb",

// }
// laptop1.compare(laptop2);







/***************************************For in Loop*********************************************************/

// let alien = {           
//     name: "shashi",
//     tech: "python",
//     laptop: {              
//         cpu: "i5",
//         ram: "8gb",

//     }
// }

// for(let key in alien["laptop"]){
//     console.log(key, alien["laptop"][key]);
// }







//doubt

// const ob ={name:"Pooja",age:26,course:"B.E."}
// const obj2 ={...ob,age:ob.age+ 30}
// ob.age =30
// console.log(ob)
// console.log(obj2)


// function start() {
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//     }
        
        
    
    // console.log(i);

// }
// start();

// var a = "shashi", a = 10;
// let b = "shashi"
// console.log(a);
// console.log(b);









// let a = undefined;
// let b = null;
// c = console.log(a);    
// d = console.log(b);


// The == comparison operator doesn't check the types. null and undefined both return false . That's why your code is actually checking if false is equal to false .
// console.log(typeof a == typeof b);   






// if(null){
//     console.log("yes");
    
// }
// else{
//     console.log("no");
// }






// let person = {
// fName: "shashi", 
// lName:"dhar", 
// age: 22};
// person.age = 23;
// person.fName = "shashidhar";
// person.lName = "challamarada"

// console.log(person.fName +" "+ person.lName);
// // console.log(person.lName);


// let contact = {
//     firstName: 'shashi',
//     lastName: 'dhar',
//     email: 'shashi.dhar@.com',
//     phone: '9999999999',
//     address: {
//         building: '4000',
//         street: 'North 1st street',
//         city: 'Bangalore',
//         state: 'KA',
//         country: 'IND'
//     }
// }

// console.log(contact.address.state);
// console.log(contact['address']);



// let num = 10
// num = true

// console.log(num, typeof num);



// console.log(Boolean(undefined));




// let num1 = false;
// let num2 = false;

// console.log(num1+num2);



// let a = undefined;
// let b = null;
// console.log(typeof a);
// console.log(typeof b);
// console.log(a === b);



// let a = 7;
// let b = ++a;
// console.log(b);
// c = ++a;
// console.log(c);



// doubt no 2 :-



// let a = "mba";
// let b = "la";
// console.log(a >= b);




//  console.log(NaN == NaN);


// let x = "8";
// let y = 2;
// console.log()
 

// let x = "2"
// let y = 1
// let z = 1
// console.log(x+y+z);



// let shashidhar = {
//     color: "medium",
//     height: 5.6,
//     weight: 95,

// }
// let shashidhar2 = shashidhar;
// shashidhar2["weight"] = 55;

// console.log(shashidhar2);
// console.log(shashidhar);






// let num = 56;
// if(num == 0){
//     console.log("It's invalid number and you entered number is:",num);

// }
// else if(num%2 === 0){
//     console.log("It is a Even number and You entered number is:",num);

// }
// else{
//     console.log("It is a Odd number and you entered number is:",num);

// }






// ternary operator...

// num = undefined;
// result = num%2 ? "It is Even Number" : "It is Odd Number"
// console.log(result);


// num = 0;
// result = num%2 ? "It is Even Number" : "It is Odd Number"
// console.log(result);









// // doubt 1: cleared
// for(var i = 0;i<5;i++){                     //outputs number 0...4
//     console.log("The number is: " + i);    //it supports concatenation of string with number i.e. it converts number to string 
    
// }                                           //type coercion 






// num = 0;
// result = num%2 ? "It is Even Number" : "It is Odd Number"
// console.log(result);





// let globalVar = 10;
 
// function fun() {
//   let localVar = 15;
 
//   console.log("This is a global variable: ",globalVar);
//   console.log("This is a local variable: ",localVar);
// }
 
// fun();

// console.log(localVar);



// var a = 5;
// var b = 5.5;
// c = console.log(a/b);

// d = typeof(c);
// console.log(d);


// let a = "8";
// let b = 7;

// console.log(typeof(a+b));
// console.log(a-b);










