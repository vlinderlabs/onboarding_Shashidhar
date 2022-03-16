const recordVideoOne = new Promise((resolve, reject) => {
    resolve("The Video 1 is uploaded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("The Video 2 is uploaded");
});
const recordVideoThree = new Promise((resolve, reject) => {
    resolve("The Video 3 is uploaded");
})




// instance methods...

Promise.all([               //It will wait untill all the elements exexute 
    recordVideoOne, 
    recordVideoTwo, 
    recordVideoThree
]).then((msg) => {
    console.log(msg);
});

// Promise.race([              //who's execute first that 1 will be returned...
//     recordVideoOne, 
//     recordVideoTwo, 
//     recordVideoThree
// ]).then((msg) => {
//     console.log(msg);
// });

          