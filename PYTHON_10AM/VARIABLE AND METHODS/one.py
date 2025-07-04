class Employee:
    company_name = 'TCS'
    def __init__(self, emp_id, ename, esalary):
        self.emp_id = emp_id
        self.ename = ename
        self.esal = esalary


e1= Employee(101,'Rahul',45000)
e2= Employee(102,'Sonia',55000)
e3= Employee(103,'Priya',65000)


print(Employee.__dict__)
print(e1.__dict__)
print(e2.__dict__)
print(e3.__dict__)