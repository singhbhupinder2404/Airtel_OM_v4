let eids = [101, 102, 103, 104];
//create new array based on existing array?
let uids = []
for (let eid of eids){
    uids.push(eid);
}

console.log(uids);

let new_Eids = eids.map((eid) =>{
    return eid + 100;
})
console.log(new_Eids);

let new_id = [...eids];

console.log(new_id);