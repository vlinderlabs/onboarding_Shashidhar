function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(10, 10, undefined));   //outputs: 100
console.log(multiply(10, 10, 2));       //outputs: 200
// console.log(multiply(10, 10, "shashi"));   //outputs: Argument of type 'string' is not assignable to parameter of type 'number'    

