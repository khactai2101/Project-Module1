// xóa btn login signup và hiển thị xin chào username lấy từ localstorage
const auth = JSON.parse(localStorage.getItem("auth"));
if (auth) {
  renderUser();
}
//

function renderUser() {
  const username = document.querySelector("#username");
  username.innerHTML = "Xin chào " + auth.username;

  const login = document.querySelector(".login");
  login.style.display = "none";
  const register = document.querySelector(".register");
  register.style.display = "none";
  const logout = document.querySelector(".logout-user");
  logout.style.display = "block";
  const cart = document.querySelector(".cart");
  cart.style.display = "block";

  // neu admin thi se~
  const isAdmin = auth.role === "admin";
  if (isAdmin) {
    const usermanagement = document.querySelector(".management");
    usermanagement.style.display = "block";

    cart.style.display = "none";
  }
}
// logout
const logout = document.querySelector(".logout-user");
logout.addEventListener("click", (e) => {
  localStorage.removeItem("auth");
  window.location.href = "../index.html";
});
