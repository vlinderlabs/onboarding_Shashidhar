
// simple example for function over loading

function sum(num1: number, num2: number): number;
function sum(num1: string, num2: string): string;
function sum(num1: any, num2: any){
    return num1 + num2;
}

console.log(sum("shashi", "dhara"));
console.log(sum(10, 40));
console.log(sum(3.14, 5.30));

