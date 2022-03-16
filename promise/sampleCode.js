
/*************************************Promises in JavaScript**********************************************/

//sample code to understand promises

let promise1 = new Promise((resolve, reject) => {
    let num = 1 + 4;
    if(num === 4)
        resolve("Success...");
    else
        reject("Failed!!!");
});


promise1.then((msg) => {
    console.log(`your status of the result is: ${msg}`);
}).catch((msg) => {
    console.log(`your status of the result is: ${msg}`);
});




