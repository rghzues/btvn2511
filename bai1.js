let stt = 1;


window.onload = function () {
    loadData();
};


document.getElementById("add").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;

    if (name === "" || price === "") {
        alert("Nhap day du vao");
        return;
    }


    let products = JSON.parse(localStorage.getItem("products")) || [];


    products.push({
        name: name,
        price: price
    });


    localStorage.setItem("products", JSON.stringify(products));


    loadData();


    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
});





function loadData() {
    let tableBody = document.querySelector("#protable tbody");
    tableBody.innerHTML = ""; 

    let products = JSON.parse(localStorage.getItem("products")) || [];

    stt = 1; 

    products.forEach((p, index) => {
        let row = document.createElement("tr");

   
        let cellStt = document.createElement("td");
        cellStt.textContent = stt++;

      
        let cellName = document.createElement("td");
        cellName.textContent = p.name;

     
        let cellPrice = document.createElement("td");
        cellPrice.textContent = p.price;

       
        let cellAction = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Gone";

        deleteBtn.addEventListener("click", function () {
            deleteProduct(index); 
        });

        cellAction.appendChild(deleteBtn);

        
        row.appendChild(cellStt);
        row.appendChild(cellName);
        row.appendChild(cellPrice);
        row.appendChild(cellAction);

        tableBody.appendChild(row);
    });
}




function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    
    products.splice(index, 1);

    
    localStorage.setItem("products", JSON.stringify(products));

    
    loadData();
}
