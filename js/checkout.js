const auths = JSON.parse(localStorage.getItem("auth"));

const accounts = JSON.parse(localStorage.getItem("accounts"));
const userLogin = accounts.find((account) => account.id === auths.id);
console.log(userLogin);

console.log(auths);
const checkout = JSON.parse(localStorage.getItem("checkout"));
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
// tạo lịch sử đơn hàng
const historyOrder = JSON.parse(localStorage.getItem("historyOrder")) || [];

function renderCheckout() {
  name.value = auths.username;
  email.value = auths.email;
  const print = document.querySelector(".sideBar");
  let content = `<div class="pay">
<div class="total">
 
  <div id="discount-show">
    <input type="text" placeholder="Mã giảm giá" />
    <button>SỬ DỤNG</button>
  </div>
  <div class="transport">
    <p>Phí vận chuyển: </p>
    <p>Miễn phí vận chuyển</p>
  </div>
  <div class="total-price">
    <p>Tổng: </p> <p id="printPrice" class="price">${checkout.totalPrice.toLocaleString(
      "vi",
      {
        style: "currency",
        currency: "VND",
      }
    )}</p>  
  </div>
</div>
<button onclick="payOderDone()" class="btn-order">ĐẶT HÀNG</button>
</div>`;
  print.innerHTML = content;
}
renderCheckout();

function payOderDone() {
  let order = {};
  if (historyOrder.length === 0) {
    // nguoi dung` nhap vao` input
    // order la 1 don hang gom  thong tin nguoi dung va tong bill + list don hang
    // de tang id len 1
    order = {
      id: 0,
      userId: auths.id,
      name: name.value,
      email: auths.email,
      phone: phone.value,
      address: address.value,
      // cho codeOrder la` day so random bat dau` bang so 2 chi? lay phan` nguyen
      codeOrder: Number("2" + (Math.random() * 10000000).toFixed(0)),
      ...checkout,
      date: new Date(),
      status: "processing",
    };
  } else {
    const maxId = Math.max(...historyOrder.map((item) => item.id));
    order = {
      id: maxId + 1,
      userId: auths.id,
      name: name.value,
      email: auths.email,
      phone: phone.value,
      codeOrder: Number("2" + (Math.random() * 10000000).toFixed(0)),
      address: address.value,
      ...checkout,
      date: new Date(),
      status: "processing",
    };
  }
  historyOrder.push(order);
  localStorage.setItem("historyOrder", JSON.stringify(historyOrder));
  localStorage.removeItem("checkout");
  userLogin.cart = [];
  localStorage.setItem("accounts", JSON.stringify(accounts));

  const midContent = document.querySelector(".mid-content");
  midContent.style.display = "none";
  const doneBill = document.querySelector(".done-bill");
  doneBill.style.display = "block";
}
