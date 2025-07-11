let emp_Ids=[101,102,103,104]
for (let eid of emp_Ids) {
    console.log(eid);
}

let emp={
    eid:101,
    ename:"Rahul",
    gender:"Male"
}
//how to iterate object : for - in
for( prop in emp){
    //console.log(prop)
    //console.log(emp.prop)
    console.log(emp[prop])
}