const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("userTable");

let stt = 1;

addBtn.addEventListener("click", function () {
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${stt}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>
            <button class="delete-btn">Xóa</button>
        </td>
    `;

    
    tableBody.appendChild(row);

    stt++;

   
    row.querySelector(".delete-btn").onclick = function () {
        row.remove();
        reRenderSTT();
    };

  
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
});

function reRenderSTT() {
    const rows = tableBody.querySelectorAll("tr");
    let num = 1;
    rows.forEach(r => {
        r.children[0].textContent = num;
        num++;
    });
    stt = num;
}
