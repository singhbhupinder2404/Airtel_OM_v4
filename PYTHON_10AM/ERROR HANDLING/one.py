from errors import Insufficientbalerror


def withdrawal_amount():
    amount=int(input("Enter amount:"))
    acc_bal=5000
    if acc_bal<amount:
        raise Insufficientbalerror("Today is saturday")
    else:
        print("Enjoy")
    
    print("Follow the rules")

withdrawal_amount()