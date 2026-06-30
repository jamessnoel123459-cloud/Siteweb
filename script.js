// LIST KÒMANN
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// AJOUTE KÒMANN
function addOrder() {
    let product = document.getElementById("product").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let qty = document.getElementById("qty").value;

    if (name === "" || phone === "") {
        alert("Tanpri ranpli non ak telefòn!");
        return;
    }

    let order = {
        product,
        name,
        phone,
        qty
    };

    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    displayOrders();
}

// AFFICHE KÒMANN YO
function displayOrders() {
    let list = document.getElementById("orderList");
    list.innerHTML = "";

    orders.forEach((o, index) => {
        list.innerHTML += `
            <li>
                ${o.product} - ${o.qty} - ${o.name}
                <button onclick="deleteOrder(${index})">❌</button>
            </li>
        `;
    });
}

// EFASE KÒMANN
function deleteOrder(index) {
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    displayOrders();
}

// VOYE SOU WHATSAPP
function sendWhatsApp() {
    let message = "Nouvo Kòmann:%0A";

    orders.forEach(o => {
        message += `- ${o.product} x${o.qty} pou ${o.name} (%0A)`;
    });

    let url = "https://wa.me/509XXXXXXXX?text=" + message;
    window.open(url, "_blank");
}

// CHAJMAN PA DEFÒ
displayOrders(); 