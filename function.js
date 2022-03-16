/******************************************functions in javascript******************************************/

// function greet(user) {
//     return `Hello, ${user}`;
// }
// let user = "shashidhar";
//  let greeting = greet(user);           
//  console.log(greeting);




// let name = 'shashi';
// name.alias = 'dhar';           

// console.log(name.alias); // undefined





// let add = function(num1, num2){         //creating anonymous function
//     return num1 + num2;
// }

// let sum = add;
// let result = sum(2, 4);                 
// console.log(result); 







/*************************************************Arrow Function*******************************************/

// let add = (num1, num2, num3) => {       
//     return num1 + num2+num3;            //outputs NaN
// }

// let result = add(4, 5);
// console.log(result);                    //outputs 9






// // assignment Telusko
// let sum = (num1, num2) => {
//     return Math.abs(num1) + Math.abs(num2);
// }

// let result = sum(4, -6);
// console.log(result); //outputs



/******************************************Factory functions***********************************************/

// function createCircle(radius){
//     return{
//         radius,
//         draw(){
//             console.log("draw");
//         }
//     };
// }

// const circle1 = createCircle(2);
// const circle2 = createCircle(3);
// console.log(circle1);
// console.log(circle2);



/*******************************************Constructor function********************************************/

// function Alien(name, tech){
//     this.name = name;
//     this.tech = tech;
//     this.work = function(){
//         console.log("Works 12 hours a day...")
//     }
// }

// let alien1 = new Alien("shashi", "javascript");
// let alien2 = new Alien("shashi", "python");

// console.log(alien1);
// console.log(alien2);

// alien1.work();








/******************************************Nested fuctions*************************************************************/


// function hypotenuse(a, b) {
//     function square(x) { return x*x; }
//     return Math.sqrt(square(a) + square(b));
//  }
 
// var result;
// result = hypotenuse(1,5);
// console.log( result );
// res = hypotenuse(square(result));
// console.log( res );









// let cat = { type: 'Cat', sound: 'Meow' };
// let dog = { type: 'Dog', sound: 'Woof' };            //First, declare two objects cat and dog with two properties:

// const say = function (message) {                     //Second, define the say() function that accepts one argument:
//   console.log(message);
//   console.log(this.type + ' says ' + this.sound);
// };

// say.apply(cat, ['What does a cat say?']);
// say.apply(dog, ['What does a dog say?']);               //Third, call the say() function via the apply() method:











// let car = {                             //First, define an object named car:
//     speed: 5,
//     start: function() {
//         console.log('Start with ' + this.speed + ' km/h');
//     }
// };


// let aircraft = {                        //hen, define another object named aircraft:
//     speed: 10,
//     fly: function() {
//         console.log('Flying');
//     }
// };
 

// let taxiing = car.start.bind(aircraft);            //The aircraft has no start() method. To start an aircraft, you can use the bind() method of the start() method of the car object:
// let flying = aircraft.fly.bind(car);
// flying();

// taxiing();                      //outputs: Start with 10 km/h



