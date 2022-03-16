/******************************Inheritance***************************************************************/
/*************************Inheriting the properties from the parent class to the child class*************/


//inheriting the methods:

// const person = {
//     name: "shashidhar",
//     age: 24, 
//     modifyAge: () => {
//         const age = 25;
//         return this.age;

//     },
//     modifyName: () => {
//         return this.name = "pavan";

//     }
// }

// // console.log(person.name);           //outputs: shashidhar
// // console.log(person.modifyName());   //outputs: pavan

// const person1 = Object.create(person);     //person1 object created
// person1.age = 24;               //creates property age on person1 object
// console.log(person.modifyAge());  //outputs
// console.log(person.age);






// sample program:-

// class Car{
//     setName(name) {
//         this.name = name;
//     }
//     setEngineStart(){
//         console.log(`The Engine started for ${this.name}`);

//     }
//     setEngineStop(){
//         console.log(`The Engine Stoped for ${this.name}`);

//     }
// }

// class MaruthiSuzuki extends Car{
//     topSpeed(speed){
//         console.log(`Top Speed for ${this.name} is: ${speed}`);

//     }
// }

// let mySuzuki = new MaruthiSuzuki();
// mySuzuki.setName("Maruthi-800");
// mySuzuki.setEngineStart();
// mySuzuki.topSpeed(200);
// mySuzuki.setEngineStop();







//another example

// class person{
// 	constructor(name){
// 		this.name = name;
// 	}
	
// 	toString(){                         //method to return   string
// 		return (`Name of person: ${this.name}`);
// 	}
// }
// class student extends person{
// 	constructor(name,id){
// 		//super keyword to for calling above class constructor
// 		super(name);
// 		this.id = id;
// 	}
// 	toString(){
// 		return (`${super.toString()},Student ID: ${this.id}`);
// 	}
// }
// let student1 = new student('Mukul',22);
// console.log(student1.toString());
