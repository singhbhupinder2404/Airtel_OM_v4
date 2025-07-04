class Insufficientbalerror(Exception):
    def __init__(self, msg):
        self.msg = msg
        super().__init__(msg)

def withdrawal__amount(amount):
    acc_bal = 1500  # Example account balance, can be replaced with actual balance retrieval logic
    if acc_bal < amount:
        raise Insufficientbalerror("Low Balance")
    else:
        print("Withdrawal successful")
    
    print("Pls follow rules and regulations")

# Example usage
withdrawal__amount(5000)