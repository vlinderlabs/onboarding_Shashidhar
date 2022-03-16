

function Employee(name: string, id: number, baseSalary: number){
    this.name = name;
    this.id = id;
    this.baseSalary = baseSalary;
    // this.monthlyBonus = 4000;
    let monthlyBonus = 4000;


    let calTotalSalary: any= () => {
        let totalSalary = baseSalary + monthlyBonus;
        console.log(`The Employee ${this.name} Total Salary is: ${totalSalary}`); 


    }
    this.getEmpDetails = () => {
        console.log(`The Name of Emp is: ${this.name} And The ID of emp is: ${this.id}`);
        calTotalSalary();
    }
}
let emp1 = new Employee("Shashidhar", 1010, 25_000);
emp1.getEmpDetails();
// emp1.calTotalSalary();


console.log(emp1.monthlyBonus);
// emp1.monthlyBonus = 6000;
// console.log(emp1.monthlyBonus);
