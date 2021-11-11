let EmployeeDetails = function(name,age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
        return this.name
    }

    this.getAge = function () {
        return this.age
    }

}

let emp1 = new EmployeeDetails("Aravinda",33);
let emp2 = new EmployeeDetails("Harry", 55);

console.log(emp1.getName());
console.log(emp2.getName());

