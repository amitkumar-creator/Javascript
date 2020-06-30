
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
    formData["model"] = document.getElementById("model").value;
    formData["yearmodel"] = document.getElementById("yearmodel").value;
    formData["year"] = document.getElementById("year").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.model;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.yearmodel;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.year;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("model").value = "";
    document.getElementById("yearmodel").value = "";
    document.getElementById("year").value = "";
    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("model").value = selectedRow.cells[0].innerHTML;
    document.getElementById("yearmodel").value = selectedRow.cells[1].innerHTML;
    document.getElementById("year").value = selectedRow.cells[2].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.model;
    selectedRow.cells[1].innerHTML = formData.yearmodel;
    selectedRow.cells[2].innerHTML = formData.year;
    
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("model").value == "") {
        isValid = false;
        document.getElementById("modelValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("modelValidationError").classList.contains("hide"))
            document.getElementById("modelValidationError").classList.add("hide");
    }
    return isValid;
}

function enterLocation(){
    if(document.getElementById('location').value="mumbai"){
        alert('Location kis not valid')
    }
}