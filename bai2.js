const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("userTable");

let stt = 1;


window.onload = function () {
    loadData();
};


addBtn.addEventListener("click", function () {
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    users.push({
        name: name,
        email: email
    });

    
    localStorage.setItem("users", JSON.stringify(users));

    
    loadData();

    
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
});



function loadData() {
    tableBody.innerHTML = ""; 

    let users = JSON.parse(localStorage.getItem("users")) || [];

    stt = 1;

    users.forEach((u, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${stt}</td>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>
                <button class="delete-btn" onclick="deleteUser(${index})">Xóa</button>
            </td>
        `;

        stt++;
        tableBody.appendChild(row);
    });
}



function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    users.splice(index, 1);

    
    localStorage.setItem("users", JSON.stringify(users));

    
    loadData();
}
