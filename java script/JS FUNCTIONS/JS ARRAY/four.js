let eids = [101, 102, 103, 104, 105, 101,102, 103, 104, 105, 109, 110,109,110];

console.log("original array:", eids); // Output: [100, 101, 102, 103, 104, 105]

let uniqueeids = [...new Set(eids)];
console.log("uniquearray:", uniqueeids)
