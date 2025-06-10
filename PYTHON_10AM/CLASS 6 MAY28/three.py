list1=[84,40,81,14,0]
ba=bytearray(list1)
print (type(ba))

bytes_obj=bytes(list1)
print(81 in bytes_obj)
print(80 in bytes_obj)