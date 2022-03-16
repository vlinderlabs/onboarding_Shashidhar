

let marks: number = 76;     //outputs: Your Marks is 76 And your Grade is: B     

if(marks < 35){
    console.log(`Your marks is ${marks} And your Grade is: D`);
}
else if((marks > 35) && (marks <= 50)){
    console.log(`Your Marks is ${marks} And your Grade is: C`);

}
else if((marks > 50) && (marks <= 80)){
    console.log(`Your Marks is ${marks} And your Grade is: B`);

}
else if((marks > 80) && (marks <= 100)){
    console.log(`Your Marks is ${marks} And your Grade is: A`);
}
else{
    console.log("Your are entered wrong marks");

}