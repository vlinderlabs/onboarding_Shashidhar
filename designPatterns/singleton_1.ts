


class MySingleton{
    private static instance: MySingleton;       //static variable declaration

    private constructor(){ 

    }
    static getInstance(){
        if(!MySingleton.instance){
            MySingleton.instance = new MySingleton();   //creating new object of class MySingleton

        }
        return MySingleton.instance;

    }

}
let singleton1 = MySingleton.getInstance();
let singleton2 = MySingleton.getInstance();
console.log(singleton1 === singleton2);         //outputs: true

if(singleton1 === singleton2){
    console.log("Singleton works, both variables contain the same instance.");
}
else{
    console.log("Singleton failed, variables contain different instances.");
}

//outputs: Singleton works, both variables contain the same instance.
