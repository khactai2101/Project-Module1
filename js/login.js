const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

function handleSubmit() {
  const userForm = getDataForm(); // b1: lay du lieu tu form

  const accountDB = getDataLocal(); //b2: lay du lieu tu local

  //   b3: kiem duyet du lieu
  const userLogin = accountDB.find(
    (user) =>
      user.email === userForm.email && user.password === userForm.password
  );
  //   neu dung: luu thong tin userLogin len localstorage (delete password)
  // neu sai: thong bao nguoi dung sai email, password
  if (userLogin) {
    if (userLogin.status !== false) {
      delete userLogin.password;
      localStorage.setItem("auth", JSON.stringify(userLogin));
      if (userLogin.role === "admin") {
        // Nếu user có role "admin", chuyển hướng tới trang "user-management"
        window.location.href = "../html/user-management.html";
      } else {
        // Nếu không, chuyển hướng về trang chủ
        window.location.href = "../index.html";
      }
    } else {
      alert("Tài khoản đã bị khóa! Vui lòng liên hệ Admin để được hỗ trợ");
    }
  } else {
    alert("Email hoặc mật khẩu sai");
  }
}

function getDataForm() {
  const emailValue = document.querySelector("#email-input").value;
  const passwordValue = document.querySelector("#password-input").value;

  return {
    email: emailValue,
    password: passwordValue,
  };
}
function getDataLocal() {
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  return accounts || [];
}
