
let stocks = {
    fruits: ["apple", "strawberry", "banana", "grapes"], 
    liquid: ["water", "milk"],
    holder: ["cone", "cup", "stick"], 
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(() => {
                resolve(work());
            }, time);
        }else{
            reject(console.log("Our Shop Is Closed.."));
        }
    });
}
order(2000, () => {console.log(`${stocks.fruits[0]} was selected...`);})
.then(() => {
    return order(0000, () => {console.log(`The production has started...`)});
})
.then(() => {
    return order(2000, () => {console.log(`The fruit was chopped...`)});
})                                                                               //then(): promise chaining
.then(() => {
    return order(1000, () => {console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected...`)});
})
.then(() => {
    return order(1000, () => {console.log(`machine was started...`)});
})
.then(() => {
    return order(2000, () => {console.log(`icecreame was placed on ${stocks.holder[0]}`)});
})
.then(() => {
    return order(3000, () => {console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} are placed on icecreame`)});
})
.then(() => {
    return order(3000, () => {console.log(`Take the icecreame...`)});
})
.catch(() => {
    console.log(`Customer Left`);                                        //catch(): Error handler part...
})
.finally(() => {
    console.log(`The day is Ended Shop is closed...`);                  //finally() method
});
