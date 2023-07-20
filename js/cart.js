const accounts = JSON.parse(localStorage.getItem("accounts"));

const userLogin = accounts.find((account) => account.id === auth.id);
const cart = userLogin.cart;

function renderLeft() {
  const print = document.querySelector("#printOrder");
  let content = "";

  cart.forEach((product) => {
    content += ` <div class="row">
    <div class="col-4 img">
      <img
        src="${product.img}"
        alt=""
      />
      <p>
        ${product.nameProduct}
      </p>
    </div>
    <div class="col-2 price new-price">${product.price.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}</div>
    <div class="col-2 quantity">
      <div class="quantity-cout">
        <button class="btn-quantity" onclick="minus(${product.id})">-</button>
        <input type="text" value="${product.orderQuantity}" min="0" />
        <button class="btn-quantity" onclick="plus(${product.id})">+</button>
      </div>
    </div>

    <div class="col-2 total-price new-price" >${(
      product.price * product.orderQuantity
    ).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}</div>
    <div class="col-2 delete-product"><button class="btn-delete" onclick="handleDelete(${
      product.id
    })">Xóa</button></div>
  </div>`;
  });
  localStorage.setItem("accounts", JSON.stringify(accounts));

  print.innerHTML = content;
}
renderLeft();
function plus(id) {
  const product = cart.find((user) => user.id === id);
  if (product.orderQuantity > 0) {
    product.orderQuantity++;
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }
  renderLeft();
  renderRight();
}

function minus(id) {
  const product = cart.find((user) => user.id === id);
  if (product.orderQuantity > 1) {
    product.orderQuantity--;
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }
  renderLeft();
  renderRight();
}

function renderRight() {
  const print = document.querySelector(".cart-sidebar");
  let content = "";
  let sum = 0;
  cart.forEach((product) => {
    content = `  <div class="col-4"><strong>CỘNG GIỎ HÀNG</strong></div>
      <div id="printOrder"></div>
      <table>
        
        <tr>
          <th>Giao hàng:</th>
          <td>Giao hàng miễn phí (đơn ≥ 800k)</td>
        </tr>
        <tr>
          <th>Tổng:</th>
          <td class = "new-price">${(sum +=
            product.price * product.orderQuantity).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })} </td>
        </tr>
      </table>
      <button class="btn-pay" onclick="paymentOrderProduct(${sum})">Tiến hành thanh toán</button>`;
  });
  print.innerHTML = content;
}
renderRight();

// thanh toan hàng
function paymentOrderProduct(sum) {
  const object = {
    totalPrice: sum,
    order: cart,
  };
  localStorage.setItem("checkout", JSON.stringify(object));
  window.location.href = "checkout.html";
}

// xóa
function handleDelete(id) {
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  const userLogin = accounts.find((account) => account.id === auth.id);

  cart.forEach((item, index) => {
    if (item.id === id) {
      cart.splice(index, 1);
      alert("Xóa thành công");
    }
  });
  localStorage.setItem("accounts", JSON.stringify(accounts));

  renderLeft();
  renderRight();
}
// render lich su don hang
