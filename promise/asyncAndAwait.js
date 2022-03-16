/********************************************Async Keyword************************************************/
/**The async keyword allows you to define a function that handles asynchronous operations.****************/


// async function sayHello() {
//     return 'Hello World';
// }

// sayHello().then(console.log);        //Hello World





/********************************************Await Keyword***********************************************/
/********We use the await keyword to wait for a Promise to settle either in resolved or rejected state.**/


// async function display() {
//     let result = await sayHello();
//     console.log(result);         //Hello World
// }

// display()





async function getUser(userId) {
    try {
       const user = await Promise.reject(new Error('Invalid User Id'));
    } catch(error) {                          //catching only one error...
       console.log(error);
    }
}

// getUser(100);





async function showServiceCost() {
    try {
       let user = await getUser(100);
       let services = await getServices(user);
       let cost = await getServiceCost(services);
       console.log(`The service cost is ${cost}`);
    } catch(error) {                 //catching two or more errors...
       console.log(error);
    }
}
showServiceCost();
