from errors import Insufficientbalerror
def withdrawal_amount():
    amount = int(input("Enter: "))
    acc_bal = 5000
    try:
        if acc_bal <= amount:
            raise Insufficientbalerror("Low Balance")
        else:
            print("Enjoy")

    except Insufficientbalerror as e:
        print(e.msg)

    print("Follow the rules")

withdrawal_amount()