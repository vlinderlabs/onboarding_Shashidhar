class Employee{
    eid: number = 0;
    ename: string = "pavan";
    deptno: number = 2;

    constructor(){

    }


    // constructor(eid: number,ename: string, deptno: number){
    //     this.eid = eid;
    //     this.ename = ename;
    //     this.deptno = deptno;       
    // }

    setData(eid: number, ename: string, deptno: number): void{

        this.eid = eid;
        this.ename = ename;
        this.deptno = deptno;
    }

    display(): void{

        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptno);
    }
}

// let obj1 = new Employee(1010, "shashidhar", 10);
let obj1 = new Employee();
// obj1.ename = "shashidhar";
// obj1.deptno = 10;
// obj1.eid = 1010;

// obj1.setData(1010, "shashidhar", 10);
obj1.display();
