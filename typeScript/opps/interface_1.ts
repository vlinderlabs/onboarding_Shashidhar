interface I1{
    num1: number;
    num2: number;
    sum(): number;
}

interface I2 extends I1{
    num3: number;
    num4: number;
    sub(): number;

}
class C1 implements I2{
    num1: number;
    num2: number;
    num3: number;
    num4: number;
    sum(): number{
        return this.num1 + this.num2;
    }
    sub(): number{
        return this.num3 - this.num4;

    }

}

let obj1 = new C1();
obj1.num1 = 1000;
obj1.num2 = 2000;
obj1.num3 = 4000;
obj1.num4 = 3000;

console.log(obj1.sub());
console.log(obj1.sum());
