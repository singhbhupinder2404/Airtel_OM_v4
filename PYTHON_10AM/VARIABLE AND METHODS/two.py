class Test:
    def __init__(self):
        self.a = 10
        self.b = 20

    def m1(self):
        self.c=30

    
    
    t1=Test()
    t1.m1()
    t2=Test()
    t2.d=40

    print(t1.__dict__)
    print(t2.__dict__)

    