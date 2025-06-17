enames = ["rahul","sonia","priya"]
def changecase(ename):
       return ename.uppercase()
print(enames)
new_enames = list(map(lambda ename: ename.upper(), enames))
print(new_enames)