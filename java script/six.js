let a=10
let b=20.5
let c="30"
let d="Rahul"
let e=true
let f=false
let g


console.log(a+b) // 30.5
console.log(a+c) // 1030 // string concatenation
console.log(a+d) // 10Rahul // string concatenation
console.log(a+e) // 11 // true is converted to 1
console.log(a+f) // 10 // false is converted to 0eaterThan = a > b // false
console.log(a-b) // -10.5
console.log(a*b) // 205 // 10 * 20.5
console.log(a/b) // 0.4878048780487805  // 10 / 20.5
console.log(a%c) // 10 // 10 % 30 = 10
console.log(a>d) // false // 10 is not greater than "Rahul"
console.log(a<d) // true // 10 is less than "Rahul" // (string comparison)
console.log(a>=b) // false // 10 is not greater than or equal to 20.5
console.log(a<=b) // true // 10 is less than or equal to 20.5
console.log(a==b) // false // 10 is not equal to 20.5   
console.log(a+g) // undefined // g is not defined
console.log(a*d) // NaN // 10 * "Rahul" is not a number