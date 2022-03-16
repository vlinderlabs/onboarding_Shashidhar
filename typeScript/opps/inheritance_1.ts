class Person{
    name: string;
    education: string;

    constructor(name: string, education: string) {
        this.name = name;
        this.education = education;

    }

}
class Employee extends Person{
    empId: number;
    empDeptName: string;

    constructor(name: string, education: string, empId: number, empDeptName: string){
        super(name, education);
        this.empId = empId;
        this.empDeptName = empDeptName;

    }
    displayEmpDetails(): void{
        console.log(this.empId);
        console.log(this.name);
        console.log(this.education);
        console.log(this.empDeptName);


    }
}

let emp1 = new Employee("shashidhar", "B.E.", 1010, "Developer");

emp1.displayEmpDetails();