function getId(): number
function getId(qty: 0): never
function getId(qty: number): number[]
function getId(qty?: number): number | number[] {
    if(qty === 0) throw new Error("Quantity can not be zero");

    if(!qty){
        return Math.random();

    }
    const arr = [];
    for(let i = 0; i<qty; i++){
        arr.push(Math.random());
    }
    return arr;


}

console.log(getId());       //outputs: 0.38381378705375657
console.log(getId(2));      //outputs: [ 0.9877964829721491, 0.46944211728385166 ]
console.log(getId(0));      //outputs: Error: Quantity can not be zero
