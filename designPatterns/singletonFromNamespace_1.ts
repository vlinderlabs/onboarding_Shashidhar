
// namespaces to singleton

namespace MySingleton{
    export function greet(): String{
        return "Hello from namespace (Singleton)!"
    }

}
let singleton1 = MySingleton;
let singleton2 = MySingleton;

console.log(singleton1 === singleton2); //outputs: true
