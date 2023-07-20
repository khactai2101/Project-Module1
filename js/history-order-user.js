const historyOrder = JSON.parse(localStorage.getItem("historyOrder"));
const auths = JSON.parse(localStorage.getItem("auth"));
console.log(historyOrder);
console.log(auths);
const newHistoryOrder = historyOrder.filter((e) => e.userId === auths.id);
console.log(newHistoryOrder);
renderHistoryOrder();
function renderHistoryOrder() {
  const tbody = document.querySelector("tbody");

  let tbodyContent = "";

  newHistoryOrder.forEach((product, index) => {
    tbodyContent += `<tr>
    <td>${index + 1}</td>
    <td>${new Date(product.date).toLocaleDateString()}</td>
    <td>${new Date(
      new Date(product.date).getTime() + 432000000
    ).toLocaleDateString()}</td>
    <td>${product.status}</td>
    <td>${product.totalPrice.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}</td>
  </tr>`;
  });
  tbody.innerHTML = tbodyContent;
}
// hien thi lich su don hang
document.querySelector("#history").addEventListener("click", () => {
  const tableHistory = document.querySelector(".table-history");
  tableHistory.classList.toggle("toggle-table");
});
