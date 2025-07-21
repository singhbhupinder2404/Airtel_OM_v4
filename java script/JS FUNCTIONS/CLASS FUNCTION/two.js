class Account{
    acc_id;
    acc_Name;
    acc_Bal;
    min_Bal=500;
    constructor(id, name, amount){
        this.acc_id = id;
        this.acc_Name = name;
        this.acc_Bal = amount;
    }
    open_Acc(){console.log("Account opened successfully");
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal + amount;
    }

    withdraw_Amount(amount){
        this.acc_Bal=this.acc_Bal - amount;
    }
    get_Bal(amount){
        this.acc_Bal=this.acc_Bal - this.min_Bal;    
    }
}

    
let rg=new Account(101,"Rahul", 5000);
let pg=new Account(102, "Priyanka", 6000);
let sg=new Account(103,"Sonia",7000);

rg.deposit_Amount(2000);
console.log(rg);
rg.deposit_Amount(50);
console.log(rg);
rg.withdraw_Amount(1000);
console.log(rg);