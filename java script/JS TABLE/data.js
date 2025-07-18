let employees=[{"eid":1,"name":"Jessalyn","gender":"Female"},
{"eid":2,"name":"Charita","gender":"Female"},
{"eid":3,"name":"Filmore","gender":"Male"},
{"eid":4,"name":"Odelinda","gender":"Female"},
{"eid":5,"name":"Lorelle","gender":"Female"},
{"eid":6,"name":"Selina","gender":"Female"},
{"eid":7,"name":"Nadya","gender":"Female"},
{"eid":8,"name":"Renelle","gender":"Female"},
{"eid":9,"name":"Rodolfo","gender":"Male"},
{"eid":10,"name":"Sara-ann","gender":"Female"},
{"eid":11,"name":"Amberly","gender":"Female"},
{"eid":12,"name":"Sigfrid","gender":"Male"},
{"eid":13,"name":"Leupold","gender":"Non-binary"},
{"eid":14,"name":"Jeramie","gender":"Male"},
{"eid":15,"name":"Brett","gender":"Male"},
{"eid":16,"name":"Merwin","gender":"Male"},
{"eid":17,"name":"Concordia","gender":"Female"},
{"eid":18,"name":"Emanuel","gender":"Male"},
{"eid":19,"name":"Quill","gender":"Male"},
{"eid":20,"name":"Ingamar","gender":"Male"},
{"eid":21,"name":"Devonna","gender":"Female"},
{"eid":22,"name":"Chlo","gender":"Bigender"},
{"eid":23,"name":"Valdemar","gender":"Male"},
{"eid":24,"name":"Noah","gender":"Male"},
{"eid":25,"name":"Ignazio","gender":"Bigender"},
{"eid":26,"name":"Demetria","gender":"Female"},
{"eid":27,"name":"Ara","gender":"Male"},
{"eid":28,"name":"Thacher","gender":"Male"},
{"eid":29,"name":"Marylin","gender":"Female"},
{"eid":30,"name":"Theresa","gender":"Bigender"},
{"eid":31,"name":"Chad","gender":"Female"},
{"eid":32,"name":"Monroe","gender":"Male"},
{"eid":33,"name":"Russell","gender":"Male"},{"eid":34,"name":"Virgina","gender":"Female"},
{"eid":35,"name":"Albie","gender":"Male"},
{"eid":36,"name":"Hakeem","gender":"Male"},
{"eid":37,"name":"Baillie","gender":"Male"},
{"eid":38,"name":"Fleming","gender":"Male"},
{"eid":39,"name":"Jeri","gender":"Polygender"},
{"eid":40,"name":"Lorilee","gender":"Female"},
{"eid":41,"name":"Michelle","gender":"Female"},
{"eid":42,"name":"Roslyn","gender":"Genderfluid"},
{"eid":43,"name":"Margaretta","gender":"Female"},
{"eid":44,"name":"Chadwick","gender":"Male"},
{"eid":45,"name":"Clarance","gender":"Male"},
{"eid":46,"name":"Andrea","gender":"Female"},
{"eid":47,"name":"Johan","gender":"Genderfluid"},
{"eid":48,"name":"Lanie","gender":"Male"},
{"eid":49,"name":"Tootsie","gender":"Female"},
{"eid":50,"name":"Geoff","gender":"Agender"}]


let display_Emp_Data = () => {
    let rows = "";
    for (let emp of employees) {
        rows = rows + `<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.name}</td>
                        <td>${emp.gender}</td>
                    </tr>`;
    }
    document.getElementsByTagName('tbody')[0].innerHTML = rows;
}