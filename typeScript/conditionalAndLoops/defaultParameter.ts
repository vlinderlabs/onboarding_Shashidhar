function greet(name: string, greeting: string = "Hello"): any{
    console.log(`${greeting}, ${name}`);

}

console.log(greet("Shashi"));
console.log(greet("Shashi", "Welcome"));
// console.log(greet("Shashi", "Welcome", "Hello"));   //outputs compile Error: Expected 1-2 arguments, but got 3