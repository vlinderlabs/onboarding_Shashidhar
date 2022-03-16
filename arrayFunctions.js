
/***********************************************Array Functions or Methods*************************************************************/


// let values = new Array();
// values = [1,2,3,4,5,6,7];
// console.log(values);


// let names = ["shashi", NaN, undefined, null, "sri", "ganga"];
// let broName = names[3];

// let falsy_values =  [];
// falsy_values.push(names[1]);      //push() method
// falsy_values.push(names[2]);    
// falsy_values.push(names[3]);
// console.log(falsy_values);      //outputs: [ NaN, undefined, null ]

// falsy_values.pop(2);           //pop() method
// console.log(falsy_values);    //outputs: [ NaN, undefined ]


// falsy_values.shift(345566);       //shift() method
// console.log(falsy_values);       //outputs: [ undefined ]
// falsy_values.push(NaN, null);
// console.log(falsy_values);


// falsy_values.unshift("shashi");     //unshift() method
// console.log(falsy_values);          //outputs: [ 'shashi',undefined, NaN, null ]


// falsy_values.splice(1, 1);          //splice() method
// console.log(falsy_values);          //outputs: [ 'shashi', NaN, null ]


// let myName = "My name is shashidhar";
// let myArray = myName.split(' ');        //split() method
// console.log(myName);                    //outputs: My name is shashidhar
// console.log(myArray);                   //outputs: [ 'My', 'name', 'is', 'shashidhar' ]

// [a,...d] = myArray;             //spread operator
// console.log(d);                 //outputs: [ 'name', 'is', 'shashidhar' ]
// // console.log(myArray.has("name"));





//looping through all elements in array
// let names = ["shivukumar", "gangadhar", "sridhar", "shashidhar", "vidyadhar"];
// for(let i = 0;i<names.length;i++){
//     if(i === 0){
//         console.log("Big Brother: " + names[i]);
//     }
//     else{
//         console.log(`${names[i]} is a brother of ${names[i-1]}`);

//     }
// }




//for-of Loop...
// let nums = [1,2,3,4];
// nums[6] = 7;
// console.log(nums);

// for(let i of nums){
//     console.log(i);
// }



// // for-i-in-Loop...
// let num = [1,2,3,4,5];
// for(let i in num){
//     console.log(num[i]);

// }




//forEach() method
// let amount = [100, 54, 67, 87, 45, 64];
// amount.forEach(function(i){
//     if(i%2 === 0)
//         console.log(`${i} is completely divisible by num: 2`);
//     else if(i%3 === 0)
//         console.log(`${i} is completely divisible by num: 3`);
//     else
//         console.log(`${i} is divisible by num: 1`);
// });




//filter() method
// let nums = [12, 35, 41, 45, 68, 86, 96];
// filterNum = nums.filter((i) => i%3 ===0);      //outputs: [ 12, 45, 96 ] ------> it will take 1 element @ a time & perform the function which we were specified.

// //map() method
// mappedNum = filterNum.map((i) => i*2);         //outputs: [ 24, 90, 192 ]

// //reduce() method
// reducedNum = mappedNum.reduce((a, b) => a + b);     
// console.log("The Total is: ",reducedNum);                       //outputs: 306




//destructuring array
// let nums = [1,2,3,4,5];
// let [a,b,c] = nums;
// console.log(a,b,c);



//swapping Array
// let a = 1;
// let b = 3;
// [a,b] = [b,a];
// console.log(a,b);




// const numbers=[1,4,-3,4,5]
// const filtered = numbers.filter(function(value) {
//     return value>=0
// })
// console.log(filtered);


// const names = ["Nitiksha", "Niti", "Nikki", "Seema"]
// const filterNames = (arrayOfNames,input) => {
//     return arrayOfNames.filter(name => name.includes(input));
// };
// console.log(filterNames(names,'S'));



// const items = [
//     {name: 'Mangoes', price:100},
//     {name: 'Apple', price:200},
//     {name: 'Orange', price:300},
//     {name: 'Grape', price:500},
//     {name: 'Pineapple', price:600},
//     {name: 'Phone', price:1000}
// ]
// const itemNames = items.map((item) =>{
//     return item.name;
//     return item.price;
// }) 
// console.log(itemNames)




// const items = [
//     {name: 'Mangoes', price:100},
//     {name: 'Apple', price:200},
//     {name: 'Orange', price:300},
//     {name: 'Grape', price:500},
//     {name: 'Pineapple', price:600},
//     {name: 'Phone', price:1000}
// ]
//  const foundItem = items.find((item) =>{
//         return item.name === 'Apple'
//     }) 
//     console.log(foundItem)




// 3. Find Method:-
//           find() method in Javascript is used to get the value of the first element in the array that satisfies the provided condition.
// It checks all the elements of the array and whichever first element satisfies the condition is going to print.

           //********Find Method*********

// const items = [
//     {name: 'Mangoes', price:100},
//     {name: 'Apple', price:200},
//     {name: 'Orange', price:300},
//     {name: 'Grape', price:500},
//     {name: 'Pineapple', price:600},
//     {name: 'Phone', price:1000}
// ]
//  const foundItem = items.find((item) =>{
//         return item.name === 'Apple'
//     }) 
//     console.log(foundItem)

// 4. forEach Method:-
//                   The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements.

                 //******forEach method********

// const items = [
//     {name: 'Mangoes', price:100},
//     {name: 'Apple', price:200},
//     {name: 'Orange', price:300},
//     {name: 'Grape', price:500},
//     {name: 'Pineapple', price:600},
//     {name: 'Phone', price:1000}
// ]
//  items.forEach((item) =>{
//     // console.log(item.name)
//     console.log(item.price)
//     }) 

// 5. Some Method:-
//               The some() method checks if any array elements pass a test (provided as a function). 
// The some() method executes the function once for each array element: If the function returns true, some() returns true and stops.
// If the function returns false, some() returns false and stops.

                    //*******Some Method************

// const items = [
//     {name: 'Mangoes', price:100},
//     {name: 'Apple', price:200},
//     {name: 'Orange', price:300},
//     {name: 'Grape', price:500},
//     {name: 'Pineapple', price:600},
//     {name: 'Phone', price:1000}
// ]
//  const hasInexpensiveItems= items.some((item) =>{
//     return item.price <=100 //returns true
//     }) 
//     console.log(hasInexpensiveItems)

//     const items = [
//         {name: 'Mangoes', price:100},
//         {name: 'Apple', price:200},
//         {name: 'Orange', price:300},
//         {name: 'Grape', price:500},
//         {name: 'Pineapple', price:600},
//         {name: 'Phone', price:1000}
//     ]
//      const hasInexpensiveItems= items.some((item) =>{
//         return item.price <=0 //returns False
//         }) 
//         console.log(hasInexpensiveItems)

// 6. Every Method:-
//                The every() method executes a function for each array element. 
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.

               /****************Every Method**********/
    // const items = [
    //     {name: 'Mangoes', price:100},
    //     {name: 'Apple', price:200},
    //     {name: 'Orange', price:300},
    //     {name: 'Grape', price:500},
    //     {name: 'Pineapple', price:600},
    //     {name: 'Phone', price:1000}
    // ]
    //  const hasInexpensiveItems= items.every((item) =>{
    //     return item.price <= 1000 //returns true
    //     }) 
    //     console.log(hasInexpensiveItems)

    //     const items = [
    //         {name: 'Mangoes', price:100},
    //         {name: 'Apple', price:200},
    //         {name: 'Orange', price:300},
    //         {name: 'Grape', price:500},
    //         {name: 'Pineapple', price:600},
    //         {name: 'Phone', price:1000}
    //     ]
    //      const hasInexpensiveItems= items.every((item) =>{
    //         return item.price <= 100 //returns false
    //         }) 
    //         console.log(hasInexpensiveItems)

// 7. Total Method:-
//                 It is required parameter and used to specify the initialValue,
// or the previously returned value of the function.

        //**************Total Method*********/

 //   const items = [
//     {name: 'Mangoes', price: 100},
//     {name: 'Apple', price: 200},
//     {name: 'Orange', price: 300},
//     {name: 'Grape', price: 500},
//     {name: 'Pineapple', price: 600},
//     {name: 'Phone', price: 1000}
//         ]
// const total = items.reduce((currentTotal, items) =>{
//      return items.price + currentTotal
//  }, 0) 
//  console.log(total)