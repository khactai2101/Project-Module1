const orderHistory = JSON.parse(localStorage.getItem("historyOrder"));
const auth = JSON.parse(localStorage.getItem("auth"));

renderOrderHistory();
function renderOrderHistory() {
  const tbody = document.querySelector("tbody");

  let tableContent = "";

  orderHistory.forEach((item, index) => {
    tableContent += `<tr>
      <td>${index + 1}</td>
      <td>${item.codeOrder}</td>
      <td>${new Date(item.date).toLocaleDateString().toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${new Date(1689584009630 + 432000000).toLocaleDateString()}</td>
      <td>
     
      <button style="background-color: ${
        item.status === "processing" ? "red" : "green"
      }" class="edit" onclick="handleStatusOrder(${item.id})">${
      item.status
    }</button>
    
    
    
    </td>
      <td>${item.totalPrice}</td>
    <td>  <button class="detail">Chi tiết</button>
    
   
    </tr>`;
  });

  tbody.innerHTML = tableContent;
}
function handleStatusOrder(id) {
  const changeStatus = orderHistory.find((item) => item.id == id);
  if (changeStatus.status === "processing") {
    changeStatus.status = "done";
  }
  renderOrderHistory(orderHistory);
  localStorage.setItem("historyOrder", JSON.stringify(orderHistory));
}

//--------
if (auth) {
  renderUser();
}
function renderUser() {
  const username = document.querySelector("#username");
  console.log(username);
  username.innerHTML = "Xin chào " + auth.username;
}
// logout
const logout = document.querySelector(".logout-user");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("auth");
  window.location.href = "/index.html";
});
