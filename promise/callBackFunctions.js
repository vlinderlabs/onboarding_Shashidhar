/****************************Synchronous callbacks******************************************************/

const userLeft = false;
const watchingMovie = false;

function watchTutorialCallback(callback, errorCallback){
    if(userLeft)
        errorCallback({
            name: "User Left",
            msg: "!!!"
        });
    else if(watchingMovie)
        errorCallback({
            name: "User Watching Movie",
            msg: "Error is occured"
        });
    else
        callback("Join Ours Scrum");
}


watchTutorialCallback((msg) => {
    console.log(`Success...${msg}`);

}, (error) => {
    console.log(error.name +' '+ error.msg);
});






// function isOdd(number) {
//     return number % 2 != 0;
//   }
//   function isEven(number) {
//     return number % 2 == 0;
//   }
  
//   function filter(numbers, fn) {
//     let results = [];
//     for (const number of numbers) {
//       if (fn(number)) {
//         results.push(number);
//       }
//     }
//     return results;
//   }
//   let numbers = [1, 2, 4, 7, 3, 5, 6];
  
//   console.log(filter(numbers, isOdd));
//   console.log(filter(numbers, isEven));







  /*************************************************Asynchronous callbacks*******************************/

//   function download(url, callback) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
//         // process the picture once it is completed
//         callback(url);

//     }, 1000);
// }

// let url = 'https://shashidharbc.github.io/css/';
// download(url, function(picture) {
//     console.log(`Processing ${picture}`);
// }); 