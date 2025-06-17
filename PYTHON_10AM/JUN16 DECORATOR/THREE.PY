def home_page(name,status):
    print("Home Page")
    @login_required
    def order_page(name,status):
    print("Order Page")

@login_required
def profile_page(name,status):
    print("order_page")

def login_required(func):
    def inner(name,status):
        if status == "logged_in":
            return func(name,status)
        else:
            print("You need to login first")
    return inner
