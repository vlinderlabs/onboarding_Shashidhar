

function greet(greetmsg: string, ...name: string[]): string{
    return greetmsg +", "+ name.join(" ");

}

console.log(greet("Welcome To Vlinder", "shashidhar", "pavan", "nitiksha"));