let Prod_Prices = [100, 200, 300, 400];
//let new_Prod_Prices = [];
//for (let Price of Prod_Prices) {
//    new_Prod_Prices.push(Price + 10);
//}
//console.log(new_Prod_Prices); // Output: [110, 210, 310, 410]
//console.log(Prod_Prices);
//let new_Prod_Prices = Prod_Prices.map((Price) => Price + 10);
let new_Prod_Prices = Prod_Prices.map((Price) => {return Price + 15});
console.log(new_Prod_Prices); // Output: [110, 210, 310