var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nama"] = document.getElementById("nama").value;
    formData["nim"] = document.getElementById("nim").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    newRow.innerHTML = `
    <td>${""}</td>
    <td>${data.nama}</td>
    <td>${data.nim}</td>
    <td>
    <button class = "editBtn" onClick = "onEdit(this)">Edit</button>
    <button class = "deleteBtn" onClick = "onDelete(this)">Delete</button>
    </td>
    `;
    // cell1 = newRow.insertCell(0);
    // cell1.innerHTML = "";
    // cell2 = newRow.insertCell(1);
    // cell2.innerHTML = data.nama;
    // cell3 = newRow.insertCell(2);
    // cell3.innerHTML = data.nim;
    // cell4 = newRow.insertCell(3);
    // cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    //                    <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nim").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.nama;
    selectedRow.cells[2].innerHTML = formData.nim;
}

function onDelete(td) {
    if (confirm('Yakin mau dihapus?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nama").value == "") {
        isValid = false;
        document.getElementById("namaValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("namaValidationError").classList.contains("hide"))
            document.getElementById("namaValidationError").classList.add("hide");
    }
    return isValid;
}