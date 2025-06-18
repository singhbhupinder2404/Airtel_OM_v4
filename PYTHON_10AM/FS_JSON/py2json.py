import json 
emp=[
  {"eid":101,"ename":"RG","avail":True,"loc":None},  
  {"eid":102,"ename":"SG","avail":True,"loc":None},  
  {"eid":103,"ename":"PG","avail":True,"loc":None},  
  {"eid":104,"ename":"NM","avail":False,"loc":None},  
  {"eid":105,"ename":"AS","avail":False,"loc":None}
]
print(type(emp))

emp_json_str=json.dumps(emp)
print(emp)
print(emp_json_str)
print(type(emp_json_str))