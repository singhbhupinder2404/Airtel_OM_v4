class Account{
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit_Amount(amount){
        console.log("Amount Deposited:",amount)
    }   
}
var a1 = new Account();
a1.open_Account();
a1.deposit_Amount(5000);
a1.deposit_Amount(5000);