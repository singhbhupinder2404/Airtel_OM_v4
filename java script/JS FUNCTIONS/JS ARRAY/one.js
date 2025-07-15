let eids = [101, 102,103,104]
var new_length = eids.push(105)


console.log(new_length); // Output: 5

var removed = eids.pop()
console.log(removed); // Output: 105

var first = eids.shift()
console.log(first);

var last = eids.pop()
console.log(last);

console.log(eids)