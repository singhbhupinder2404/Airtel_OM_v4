prices=[98,198,298,398,498,598,698,798,898,998]
def addone(price):
    return price + 1

map_object = map(addone, prices)
new_prices = list(map_object)
print(new_prices)
