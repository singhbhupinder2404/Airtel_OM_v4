emp={'eid':101,
     'ename':'Rahul',
     'esal':45000.45,
     'loc':'Wayanad'}

#to read data
emp.keys()
emp.values()
emp.items()
#for result
for key in emp.keys():
    print(key)
for value in emp.values():
    print(value)
for key,value in emp.items():
    print(key,":",value)

