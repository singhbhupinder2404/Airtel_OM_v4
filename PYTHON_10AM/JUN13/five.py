numbers=[37,18,31,14,8,12,7]
for num in numbers:
    if num % 2 == 0:
        print("Even number:", num)
    else:
        print("Odd number:", num)


odd_numbers = list(filter(lambda num: num % 2 != 0, numbers))
print("Odd numbers:", odd_numbers)
even_numbers = list(filter(lambda num: num % 2 == 0, numbers))
print("Even numbers:", even_numbers)