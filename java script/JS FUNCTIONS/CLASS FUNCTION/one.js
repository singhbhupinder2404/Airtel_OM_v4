class Account{
    acc_id;
    acc_Name;
    acc_Bal;
    constructor(id, name, amount){
        this.acc_id = id;
        this.acc_Name = name;
        this.acc_Bal = amount;
    }
}
let rg=new Account(101,"Rahul", 5000);
let pg=new Account(102, "Priyanka", 6000);
let sg=new Account(103,"Sonia",7000);

console.log(rg);
console.log(pg);
console.log(sg);