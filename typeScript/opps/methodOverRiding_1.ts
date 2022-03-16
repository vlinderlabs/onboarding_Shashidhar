class Bank{
    rateOfInterest: number = 0;

    constructor(){
        this.rateOfInterest;
        
    }

    roi(): number{
        return this.rateOfInterest;

    }
}

class BankOfBaroda extends Bank{
    roi(): number{
        return 10.5;  // method overriding

    }

}

class AxisBank extends Bank{

    roi(): number{
        return 9.8;         // method overriding

    }
}

let bob1 = new BankOfBaroda();
let roi1: number = bob1.roi();
console.log(roi1);
console.log(bob1.rateOfInterest);
