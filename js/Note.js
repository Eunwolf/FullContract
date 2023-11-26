
function FullContract(ten, ngayKy, ngayHetHan, noiDung) {
    this.ma = Math.floor(Math.random() * 1000);
    this.ten = ten;
    this.ngayKy = ngayKy;
    this.ngayHetHan = ngayHetHan;
    this.noiDung = noiDung;
}
var contracts = [];
function displayContracts() {
    var table = document.getElementById("contract-table");
    table.innerHTML = "";
    var header = table.insertRow(0);
    header.insertCell(0).innerHTML = "Mã hợp đồng";
    header.insertCell(1).innerHTML = "Tên hợp đồng";
    header.insertCell(2).innerHTML = "Ngày ký";
    header.insertCell(3).innerHTML = "Ngày hết hạn";
    header.insertCell(4).innerHTML = "Nội dung";
    for (var i = 0; i < contracts.length; i++) {
        var row = table.insertRow(i + 1);
        var contract = contracts[i];
        row.insertCell(0).innerHTML = contract.ma;
        row.insertCell(1).innerHTML = contract.ten;
        row.insertCell(2).innerHTML = contract.ngayKy;
        row.insertCell(3).innerHTML = contract.ngayHetHan;
        row.insertCell(4).innerHTML = contract.noiDung;
    }
}
function addContract() {
    var ten = document.getElementById("ten").value;
    var ngayKy = document.getElementById("ngayKy").value;
    var ngayHetHan = document.getElementById("ngayHetHan").value;
    var noiDung = document.getElementById("noiDung").value;
    var contract = new FullContract(ten, ngayKy, ngayHetHan, noiDung);
    contracts.unshift(contract);
    displayContracts();
    showListPage();
}
function showListPage() {
    document.getElementById("add-page").style.display = "none";
    document.getElementById("list-page").style.display = "block";
}
function showAddPage() {
    document.getElementById("list-page").style.display = "none";
    document.getElementById("add-page").style.display = "block";
}
window.addEventListener('load', showListPage);

window.addEventListener('load', displayContracts);
