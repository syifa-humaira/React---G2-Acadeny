var selectedRow = null;

function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }

    function readFormData(){
    var formData = {};
    formData["Name"] = document.querySelector("#Name").value;
    formData["Email"] = document.querySelector("#Email").value;
    formData["Address"] = document.querySelector("#Address").value;
    formData["Gender"] = document.querySelector("#Gender").value;
    formData["Hoby"] = document.querySelector("#Hoby").value;
    formData["Religion"] = document.querySelector("#Religion").value;
    formData["Position"] = document.querySelector("#Position").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.querySelector("#employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Hoby;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Religion;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Position;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.querySelector("#Name").value = "";
    document.querySelector("#Email").value = "";
    document.querySelector("#Address").value = "";
    document.querySelector("#Gender").value = "";
    document.querySelector("#Hoby").value = "";
    document.querySelector("#Religion").value = "";
    document.querySelector("#Position").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    ocument.querySelector("#Name").value = selectedRow.cells[0].innerHTML;
    document.querySelector("#Email").value = selectedRow.cells[1].innerHTML;
    document.querySelector("#Address").value = selectedRow.cells[2].innerHTML;
    document.querySelector("#Gender").value = selectedRow.cells[3].innerHTML;
    document.querySelector("#Hoby").value = selectedRow.cells[4].innerHTML;
    document.querySelector("#Religion").value = selectedRow.cells[5].innerHTML;
    document.querySelector("#Position").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Address;
    selectedRow.cells[3].innerHTML = formData.Gender;
    selectedRow.cells[4].innerHTML = formData.Hoby;
    selectedRow.cells[5].innerHTML = formData.Religion;
    selectedRow.cells[6].innerHTML = formData.Position;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.querySelector('#employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}

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
        document.querySelector("#employeeList").hidden = false;
        document.querySelector("#regis").hidden = true;
    } else if (user == 0) {
        alert("Gagal melakukan login");
    }
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.querySelector("#myInput");
    filter = input.value.toUpperCase();
    table = document.querySelector("#employeeList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0]; // search by name karena index ke 0
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }