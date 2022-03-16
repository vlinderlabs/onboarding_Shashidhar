export let str1 = "Welcome";

export function myfunc(): void{
    console.log("this is my function");

}
export class myclass{
    a: number;
    b: number;

    constructor(a:number, b:number){
        this.a = a;
        this.b = b;

    }
    add(): number{
        return this.a + this.b;
        
    }
}