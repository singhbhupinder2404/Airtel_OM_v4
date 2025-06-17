def login_page(name, status):
    print("Login Page")
    @login_required
    def home_page(name, status):
        print("Home Page")
        @login_required
        def order_page(name, status):
            print("Order Page")
    
    @login_required
    def profile_page(name, status):
        print("Profile Page") 