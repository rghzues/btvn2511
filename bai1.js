let stt = 1;

document.getElementById("add").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;

    if (name === "" || price === "") {
        alert("Nhap day du vao");
        return;
    }

    let tableBody = document.querySelector("#protable tbody");

    let row = document.createElement("tr");

    
    let cellStt = document.createElement("td");
    cellStt.textContent = stt++;

    let cellName = document.createElement("td");
    cellName.textContent = name;

    let cellPrice = document.createElement("td");
    cellPrice.textContent = price;

    let cellAction = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Gone";

   
    deleteBtn.addEventListener("click", function () {
        row.remove();
        resetSTT(); 
    });

    cellAction.appendChild(deleteBtn);

    
    row.appendChild(cellStt);
    row.appendChild(cellName);
    row.appendChild(cellPrice);
    row.appendChild(cellAction);

    
    tableBody.appendChild(row);

   
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
});


function resetSTT() {
    let rows = document.querySelectorAll("#protable tbody tr");
    let num = 1;
    rows.forEach(r => {
        r.children[0].textContent = num++;
    });
    stt = num;
}
