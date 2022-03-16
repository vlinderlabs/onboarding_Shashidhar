



class Singleton{
    static instance: Singleton;
    data: string;

    constructor(data: string){
        this.data = data;

    }
    static getInstance(data: string){
        if(!Singleton.instance){
            Singleton.instance = new Singleton(data);


        }
        return Singleton.instance;

    }

}
let ton1 = Singleton.getInstance("Hello");      
console.log(ton1.data);                         //outputs: Hello
let ton2 = Singleton.getInstance("Shashi");     
console.log(ton2.data);                         //outputs: Hello

console.log(ton1 === ton2);                     //outputs: true

