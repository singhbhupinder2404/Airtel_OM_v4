var enames = ["Rahul","Sonia","Priya","NM"]


console.log(enames[2])

enames[2] = "Priyanka"   //update element at index 2

console.log(enames[2])

delete enames

console.log(enames)  //undefined, as the element is deleted

enames.length = 0  //set the length of the array to 3

console.log(enames)  //[] empty array