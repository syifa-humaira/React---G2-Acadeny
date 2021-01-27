var selectedRow = null;

function onSubmit() {
    var formData = readData();
    if (selectedRow == null) insertData(formData);
    else updateData(formData);
    resetForm();
}

function readData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Address"] = document.getElementById("Address").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Hoby"] = document.getElementById("Hoby").value;
    formData["Religion"] = document.getElementById("Religion").value;
    formData["Position"] = document.getElementById("Position").value;
    return formData;
}

function insertData(data) {
    var table = document
        .getElementById("hasilData")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Hoby;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Religion;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Position;
    // cell7 = newRow.insertCell(5);
    // cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    //                    <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById(Name).value = "";
    document.getElementById(Address).value = "";
    document.getElementById(Gender).value = "";
    document.getElementById(Hoby).value = "";
    document.getElementById(Religion).value = "";
    document.getElementById(Position).value = "";

    selectRow = null;
}

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("Address").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("Gender").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("Hoby").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("Religion").value = selectedRow.cells[3].innerHTML;
// }

// function updateData(formData) {
//     selectedRow.cells[0].innerHTML = formData.Name;
//     selectedRow.cells[1].innerHTML = formData.Address;
//     selectedRow.cells[2].innerHTML = formData.Gender;
//     selectedRow.cells[3].innerHTML = formData.Hoby;
//     selectedRow.cells[3].innerHTML = formData.Religion;
// }

// function onDelete(td) {
//     if (confirm("Are you sure to delete this record ?")) {
//         row = td.parentElement.parentElement;
//         document.getElementById("hasilData").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }

// function searchForm() {
//     let filter = document.getElementById("filter").value.toUpperCase();
//     console.log(filter);

//     let dataKu = document.getElementById("dataTable");

//     let tr = dataKu.getElementsByTagName("tr");
//     console.log(tr);

//     for (var i = 0; i < tr.length; i++) {
//         let td = tr[i].getElementsByTagName("td")[0];
//         console.log(td);

//         if (td) {
//             let dataText = td.innerHTML;

//             if (dataText.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

function signIn() {
    let user = 0;
    let username = document.login.username.value;
    let password = document.login.password.value;

    if (username == "admin" && password == "admin") {
        alert("Selamat anda berhasil login sebagai Admin");
        document.querySelector("#formLogin").hidden = true;
        document.querySelector("#halaman").hidden = false;
    } else if (username == "joko" && password == "joko") {
        alert("Selamat anda berhasil login sebagai user");
        document.querySelector("#formLogin").hidden = true;
        document.querySelector("#halaman").hidden = false;
        document.querySelector("#hasilData").hidden = false;
        document.querySelector("#regis").hidden = true;
    } else if (user == 0) {
        alert("Gagal melakukan login");
    }
}