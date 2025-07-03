//create
let emp={
    'eid': 101,
    'empName': 'John Doe',
    'empSalary': 50000,
    'empDesignation': 'Software Engineer',
    }

console.log(emp)
console.log(emp.eid)
//update
emp.empSalary = 55000;
console.log(emp.empSalary)
//delete
delete emp.empDesignation;
console.log(emp)
//check if property exists
console.log('empDesignation' in emp) // true