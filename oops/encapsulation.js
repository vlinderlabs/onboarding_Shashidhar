//Defining object
// let person = {
//     first_name:'shashi',
//     last_name: 'dhar',
 
//     //method
//     getFunction : function(){
//         return (`The name of the person is
//           ${person.first_name} ${person.last_name}`)
//     },
//     //object within object
//     phone_number : {
//         mobile:'8674645868',
//         landline:'08013263'
//     }
// }
// console.log(person.getFunction());
// console.log(person.phone_number.landline);




//using a constructor
// function person(first_name,last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
//     }
//     //creating new instances of person object
//     let person1 = new person('shashidhar','challamarada');
//     let person2 = new person('pavan','kumar');
    
//     console.log(person1.first_name);
//     console.log(`${person2.first_name} ${person2.last_name}`);
    




// class Cars {                        //class implementation in javascript
//     constructor(name, maker, price) { 
//       this.name = name; 
//       this.maker =  maker; 
//       this.price = price; 
//     } 
//     getDetails(){ 
//         return (`The name of the car is ${this.name}.`) 
//     } 
//   } 
//   let car1 = new Cars('Rolls Royce Ghost', 'Rolls Royce', '315Cr'); 
//   let car2 = new Cars('Mercedes AMG One', 'Mercedes', '2700Cr'); 
//   console.log(car1.name);     
//   console.log(car1.maker);   
//   console.log(car1.getDetails()); 


// value types:
// Number, String, Boolean, Symbol, undefined, null
// Reference types:
// Object, Function, Array





/***********************************************Encapsulation**********************************************/
/*In OOP's we group related variables and functions that operate on them into objects is called Encapsulation*/

//Example:
// let employee = {
//     base_salary: 25_000,
//     overtime: 10, 
//     rate: 20,
//     getWage: function(){
//         return this.base_salary + (this.overtime * this.rate);
//     }
// }
// result = employee.getWage();
// console.log(result);





// class Emp_details{ 
//     constructor(name,id){ 
//         this.name = name; 
//         this.id = id; 
//     } 
//     add_Address(add){ 
//         this.add = add; 
//     } 
//     getDetails(){ 
//         console.log(`Employee Name: ${this.name}, Address: ${this.add}`); 
//     } 
// } 
// let person1 = new Emp_details('Anand',27);
// person1.add_Address('Bangalore');
// person1.getDetails(); 






// class Employee {
//     emp_details(name, id, phone_no){
//         this.name = name;
//         this.id = id;
//         this.phone_no = phone_no;

//     }
//     empSetName(){
//         return this.name;
        
//     }
//     empSetId(){
//         return this.id;
//     }
//     empSetPhoneNo(){
//         return this.phone_no;
//     }
    
// }

// let emp1 = new Employee();
// emp1.emp_details("shashi", 1010, 9108205512);
// let emp_name = emp1.empSetName();
// console.log(emp_name);