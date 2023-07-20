const quantity = document.querySelector("#quantity");
const name = document.querySelector("#name");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const type = document.querySelector("#type");
const img = document.querySelector("#img");
const editId = document.querySelector("#idEdit");
const products = JSON.parse(localStorage.getItem("products"));
const auth = JSON.parse(localStorage.getItem("auth"));

function handleToggle() {
  // toggle
  const productShow = document.querySelector(".productInput");
  productShow.classList.toggle("toggle");

  /////
}

//xóa
function handleDelete(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct(products);

  alert("Đã xóa thành công");
}

//search
function handleSearch() {
  const search = document.querySelector("#input-search");

  const searchValue = search.value;

  const dataSearch = products.filter((product) =>
    product.nameProduct.toLowerCase().includes(searchValue.toLowerCase())
  );
  if (searchValue === "") {
    renderProduct(products);
  } else {
    renderProduct(dataSearch);
  }
}
//luu
function handleSave() {
  ////add san pham
  if (idEdit.value !== "") {
    console.log(`ccc`, editId.value);
    console.log(name.value);
    if (
      name.value === "" ||
      description === "" ||
      price === "" ||
      type === "" ||
      img === ""
    ) {
      alert("Không được để trống");
    }
    let item = products.find((i) => i.id === +idEdit.value);
    if (item) {
      item.id = +editId.value;
      item.nameProduct = name.value;
      item.description = description.value;
      item.price = price.value;
      item.type = type.value;
      item.quantity = quantity.value;
      item.img = img.value;
    }
    renderProduct(products);
    localStorage.setItem("products", JSON.stringify(products));
    handleToggle();
    window.location.reload();
  } else {
    if (
      name.value === "" ||
      description === "" ||
      price === "" ||
      type === "" ||
      img === ""
    ) {
      alert("Không được để trống");
    }

    let productValue = {
      id: products[products.length - 1].id + 1,
      code: Math.floor(Math.random() * 10000),
      nameProduct: name.value,
      description: description.value,
      price: price.value,
      type: type.value,
      img: [img.value],
      quantity: quantity.value,
    };

    products.push(productValue);
    localStorage.setItem("products", JSON.stringify(products));

    // xoa du lieu trong o input
    let allInputs = document.querySelectorAll("input");
    allInputs.forEach((singleInput) => (singleInput.value = ""));
    handleToggle();
    renderProduct(products);
  }
}

//Handle Edit
function handleEdit(id) {
  const item = products.find((i) => i.id === id);
  quantity.value = item.quantity;
  console.log(description);
  name.value = item.nameProduct;
  description.value = item.description;
  price.value = item.price;
  type.value = item.type;
  img.value = item.img;
  editId.value = item.id;

  handleToggle();
}
const tbody = document.querySelector("tbody");

function renderProduct(products) {
  let productContent = "";

  products.forEach((item, index) => {
    productContent += `<tr>
                  <td>${index + 1}</td>
                  <td>${item.nameProduct}</td>
                  <td><img src="${item.img}"></td>
                  <td>${item.description}</td>
                  <td>${item.price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}</td>
                  <td>${item.quantity}</td>          
                  <td><button class="edit" onclick="handleEdit(${
                    item.id
                  })">Sửa</button>
                    <button onclick="handleDelete(${index})" class="delete">Xóa</button>
                  </td>
                </tr>`;
  });
  tbody.innerHTML = productContent;
}
renderProduct(products);

// render header
if (auth) {
  renderUser();
}
function renderUser() {
  const username = document.querySelector("#username");
  username.innerHTML = "Xin chào " + auth.username;
}
// logout
const logout = document.querySelector(".logout-user");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("auth");
  window.location.href = "/html/login.html";
});
