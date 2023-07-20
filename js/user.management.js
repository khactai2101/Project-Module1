//render thong tin nguoi dung
//lay thong tin nguoi dung tu localstorage ve`
const accountLocal = JSON.parse(localStorage.getItem("accounts")) || [];
renderAccounLocal(accountLocal);
//render ra lai man hinh
function renderAccounLocal(accountLocal) {
  const tbody = document.querySelector("tbody");
  let tableContent = "";

  accountLocal.forEach((user, index) => {
    tableContent += `<tr>
                  <td>${user.id}</td>
                  <td>${user.email}</td>
                  <td>${user.username}</td>
                  <td>${user.role}</td>
                  <td>${
                    user.role == "admin"
                      ? ""
                      : `<button class="btnStatus" onclick="handleStatus('${
                          user.id
                        }')" style="background-color: ${
                          user.status == true ? "green" : "red"
                        }">${user.status == true ? "Active" : "Block"}</button>`
                  }</td>
                  
                </tr>`;
  });
  tbody.innerHTML = tableContent;
}

//đổi status cho user
function handleStatus(id) {
  //hàm find trả về 1 đối tượng đúng điều kiện đầu tiên
  // day là điều kiện user.id == id
  const findUser = accountLocal.find((user) => user.id == id);
  if (findUser.status == true) {
    findUser.status = false;
  } else {
    findUser.status = true;
  }
  localStorage.setItem("accounts", JSON.stringify(accountLocal));
  renderAccounLocal(accountLocal);
}

function handleSearch() {
  const search = document.querySelector("#input-search");
  const searchValue = search.value.toLowerCase();

  const dataSearch = accountLocal.filter((account) =>
    account.email.toLowerCase().includes(searchValue)
  );

  if (searchValue === "") {
    renderAccounLocal(accountLocal);
  } else {
    renderAccounLocal(dataSearch);
  }
}
const auth = JSON.parse(localStorage.getItem("auth"));
if (auth) {
  renderUser();
}
//

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
