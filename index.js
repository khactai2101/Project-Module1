// -----RENDER san pham THEO LOAI
const productsDB = JSON.parse(localStorage.getItem("products"));

function renderProductsByType(products) {
  const featuredProductsE = document.querySelector("#featured-products");

  const productTypes = {
    lipstick: "SON MÔI",
    perfume: "NƯỚC HOA",
    sunscreen: "KEM CHỐNG NẮNG",
    facemakeup: "TRANG ĐIỂM MẶT",
    eyemakeup: "TRANG ĐIỂM MẮT",
    skincare: "CHĂM SÓC DA",
  };

  let content = "";

  for (const type in productTypes) {
    const productsByType = products.filter((item) => item.type === type);

    content += `
    <div class="gap"></div>
      <section>
        <div class="section-content">
          <div class="section-main">
            <h2 class="product-title">
              <span id="${type}">${productTypes[type]}</span>
            </h2>
            <div class="content">
              <div class="container text-center">
                <div class="row" id="${type}-products">
    `;

    productsByType.forEach((item, id) => {
      content += `
        <div class="col-12 col-md-3" id="products">
          <div class="product"  >
            <div class="product-item">
              <div class="product-top">
               
                  <img src="${item.img}" onclick="handleProductDetail(${
        item.id
      })"/>
                
              </div>
              <div class="product-bot">
                <div class="product-name">
                  ${item.nameProduct}
                </div>
                <div class="product-price">
                  <span>Giá: ${item.price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}</span>
                </div>
                <button class="add-to-cart-button" onclick="handleAddToCart(${
                  item.id
                })">
                  <a>Thêm giỏ hàng</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    content += `
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  featuredProductsE.innerHTML = content;
}

// Gọi hàm render theo loại để hiển thị sản phẩm
renderProductsByType(productsDB);

// render productdetail theo id
function handleProductDetail(id) {
  // dùng hàm find để tìm ra kết quả đúng đầu tiên trong mảng
  const productDetail = productsDB.find((item) => item.id == id);

  localStorage.setItem("productDetail", JSON.stringify(productDetail));

  // truyen` id sang producdetail len tren duong` link
  window.location.href = "./html/product-detail.html?id=" + id;
}

document.querySelector("#search-value").addEventListener("input", handleSearch);

// Hàm handleSearch không cần nhận tham số "productsDB"
function handleSearch() {
  const search = document.querySelector("#search-value");
  const searchValue = search.value;

  const dataSearch = productsDB.filter((product) =>
    product.nameProduct.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  if (searchValue === "") {
    renderProductsByType(productsDB);
  } else {
    renderProductsByType(dataSearch);
  }
}

// ------------------------
const authenticate = JSON.parse(localStorage.getItem("auth"));
const accounts = JSON.parse(localStorage.getItem("accounts"));

const userLogin = accounts.find((account) => account.id === auth.id);

// addToCart là giỏ hàng của người dùng
const addToCart = userLogin.cart;

function handleAddToCart(id) {
  const productClick = productsDB.find((item) => item.id === id);

  let productOrder = {};
  if (addToCart.length === 0) {
    productOrder = {
      ...productClick,
      orderQuantity: 1,
      id: 0,
      // biet ai them vo gioo hang`
      idUser: authenticate.id,
      idProduct: productClick.id,
    };
  } else {
    //map k thay doi mang goc, tao ra mang moi tra ve value tu ham callback cho moi phan tu cua mang goc
    const maxId = Math.max(...addToCart.map((item) => item.id));
    productOrder = {
      ...productClick,
      orderQuantity: 1,
      id: maxId + 1,
      // biet ai them vo gioo hang`
      idUser: authenticate.id,
      idProduct: productClick.id,
    };
  }
  const productOld = addToCart.find(
    (product) => product.idProduct === productClick.id
  );
  if (productOld) {
    productOld.orderQuantity += 1;
  } else {
    addToCart.push(productOrder);
  }
  localStorage.setItem("accounts", JSON.stringify(accounts));
}
