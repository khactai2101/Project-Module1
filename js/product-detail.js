const authUser = JSON.parse(localStorage.getItem("auth"));
const productDetail = JSON.parse(localStorage.getItem("productDetail"));

renderDetailProduct();
function renderDetailProduct() {
  const print = document.querySelector(".detail-product__wrapper");

  let productContent = `<div class="slide-product">
           
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${productDetail.img}" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/son-2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/son-3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- card mid -->
  <div class="select-option__product">
    <div class="name-content">
      <p>${productDetail.nameProduct}</p>
    </div>
    <div class="price-product">
      <p class="new-price"  >Giá: ${productDetail.price.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</p>
    </div>
    <div class="description-product">
      <strong>${productDetail.nameProduct} </strong
      >${productDetail.description}
    </div>
  </div>

  
  <!-- card right -->
  <!-- Neu chua dang nhap thi thong bao
    neu dang nhap roi thi phai xem tai khoan co bi khoa hay khong?
  -->
    ${
      !authUser
        ? `<p></p>`
        : `
        ${
          authUser.status == false
            ? `<div class="user-block"><p>Da bi khoa</p></div>`
            : ` <div class="product-shopping">
        <p class="last-price">1.200.000</p>
        <p class="new-price">${productDetail.price.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })}</p>
        <p>Tiết kiệm: 10%</p>
        <p class="stocking">CÒN HÀNG</p>
        <div class="store-near">
          <i class="fa-solid fa-store"></i>
          <p>Cửa hàng gần bạn</p>
        </div>
        <div class="quantity">
          <p>Số lượng:</p>
          <input type="number" min="0" value="1" />
        </div>
        <div class="btn-shopping">
          <button class="addCart">Thêm vào giỏ hàng</button>
          <button class="buyNow">Mua ngay</button>
        </div>`
        }`
    }






 
  </div>`;
  print.innerHTML = productContent;
}
