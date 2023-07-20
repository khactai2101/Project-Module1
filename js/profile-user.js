let auths = JSON.parse(localStorage.getItem("auth"));
const accounts = JSON.parse(localStorage.getItem("accounts"));

const email = document.querySelector(".email");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");

const handleSave = document.querySelector("#handleSave");
renderProfile();
function renderProfile() {
  email.value = auths.email;
  username.value = auths.username;
}

handleSave.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password.value === confirmPassword.value) {
    auths.email = email.value;
    auths.username = username.value;

    let account = accounts.find((item) => item.id === auths.id);
    if (account) {
      account.email = email.value;
      account.username = username.value;
      account.password = password.value;
    }

    localStorage.setItem("auth", JSON.stringify(auths));
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Đã cập nhật thông tin");
  } else {
    alert("Mật khẩu không khớp. Vui lòng kiểm tra lại.");
  }
});
