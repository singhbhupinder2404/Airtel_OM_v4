class Account{
    acc_Id = 101;
    open_Account(){
        console.log('Account Opened Successfully')
    }
}

let a1 = new Account();
let a2 = new Account();

console.log(typeof Account);
console.log(a1.acc_Id);
a1.open_Account();