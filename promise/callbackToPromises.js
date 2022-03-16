// const userLeft = false;
// const watchingMovie = false;

// function watchTutorialPromise(){
//     return new Promise((resolve, reject) => {
//         if(userLeft){
//             reject({
//                 name: "User Left",
//                 msg: "!!!"
//             });
//         }
//         else if(watchingMovie){
//             reject({
//                 name: "User Watching Movie",
//                 msg: "Error is occured"
//             });
//         }
//         else{
//             resolve("Join Ours Scrum");
//         }
// });
// }

// watchTutorialPromise().then((msg) => {
//     console.log(`Success...${msg}`);

// }).catch((error) => {
//     console.log(error.name +' '+ error.msg);
// });









function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'john'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}


getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);

    