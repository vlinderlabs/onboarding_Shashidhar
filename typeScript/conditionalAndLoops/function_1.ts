// function name(parameter: type, parameter:type,...): returnType {
//     // do something
//  }

// example program:

function add(a: number, b: number): number {
    return a + b;
}

let sum = add(10, 20);     //outputs: 30
// let sum = add('10', '20');   // error in compile time: Argument of type 'string' is not assignable to parameter of type 'number'






//arrow function

// (parameter: type, parameter:type,...) => type

// example: 

let addition: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };





    let concatination = function (x: string, y: string): number {
        return x.concat(y).length;
    };


    console.log(concatination("shashi", "pavan"));    //outputs: 11
