product_prices = [98,198,298,398,498,598,698,798,898,998]
new_prices = list(map(lambda x: x + 1, product_prices))
print(new_prices)

#for price in product_prices:     (usingh for loop)
#    new prices.append(price + 1)
# print(new_prices)
# Output: [99, 199, 299, 399, 499, 599, 699, 799, 899, 999]