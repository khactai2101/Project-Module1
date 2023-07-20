const formElement = document.querySelector("#form-signup");
formElement.addEventListener("submit", (e) => {
  // Ngăn form được gửi đi
  handleSignup(e);
});

function handleSignup(event) {
  event.preventDefault();
  const accountDB = getDataLocal();

  const userSignup = getDataForm();
  if (!userSignup) {
    return;
  }

  if (accountDB.length === 0) {
    userSignup.role = "admin";
    userSignup.id = 1; // Gán id là 0 cho người đăng ký đầu tiên
    userSignup.status = true;
  } else {
    const maxId = Math.max(...accountDB.map((item) => item.id));
    userSignup.role = "user";
    userSignup.cart = [];
    userSignup.id = maxId + 1; // Gán id là maxId + 1 cho người đăng ký mới
    userSignup.status = true;
  }

  let isEmailDuplicate = false;
  accountDB.forEach((user) => {
    if (user.email === userSignup.email) {
      isEmailDuplicate = true;
      renderError({
        isError: true,
        emailMsg: "Email đã tồn tại!",
        usernameMsg: "",
        passwordMsg: "",
        confirmPasswordMsg: "",
      });
    }
  });

  if (!isEmailDuplicate) {
    delete userSignup.confirmPassword;
    accountDB.push(userSignup);

    localStorage.setItem("accounts", JSON.stringify(accountDB));
    alert("Đăng ký thành công!");
    formElement.reset();
    window.location.href = "./login.html";
  }
}

function getDataLocal() {
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  return accounts || [];
}

function getDataForm() {
  const emailElement = document.querySelector("#emailInput");
  const usernameElement = document.querySelector("#usernameInput");
  const passwordElement = document.querySelector("#passwordInput");
  const confirmPasswordElement = document.querySelector(
    "#confirmPasswordInput"
  );

  const user = {
    email: emailElement.value.toLowerCase().trim(),
    username: usernameElement.value,
    password: passwordElement.value,
    confirmPassword: confirmPasswordElement.value,
  };

  const error = checkValidate(user);
  if (error.isError) {
    renderError(error);
    return null;
  }

  return user;
}

function checkValidate(userCheckValidate) {
  const userLocal = getDataLocal();
  let error = {
    isError: false,
    emailMsg: "",
    usernameMsg: "",
    passwordMsg: "",
    confirmPasswordMsg: "",
  };

  userLocal.forEach((user) => {
    if (user.email === userCheckValidate.email) {
      error.isError = true;
      error.emailMsg = "Email đã tồn tại";
    }
  });

  const regxEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!userCheckValidate.email.match(regxEmail)) {
    error.isError = true;
    error.emailMsg = "Email không đúng định dạng - Vui lòng nhập lại";
  }
  if (!userCheckValidate.email) {
    error.isError = true;
    error.emailMsg = "Email không được trống";
  }
  if (!userCheckValidate.username) {
    error.isError = true;
    error.usernameMsg = "Tên không được trống";
  }
  if (userCheckValidate.password.length < 8) {
    error.isError = true;
    error.passwordMsg = "Mật khẩu phải lớn hơn 8 ký tự";
  }
  if (userCheckValidate.password !== userCheckValidate.confirmPassword) {
    error.isError = true;
    error.confirmPasswordMsg = "Mật khẩu không khớp";
  }
  return error;
}

function renderError(error) {
  const emailError = document.querySelector("#error-email");
  const usernameError = document.querySelector("#error-usernameInput");
  const passwordError = document.querySelector("#error-password");
  const confirmPasswordError = document.querySelector("#error-confirmPassword");

  emailError.innerHTML = error.emailMsg;
  usernameError.innerHTML = error.usernameMsg;
  passwordError.innerHTML = error.passwordMsg;
  confirmPasswordError.innerHTML = error.confirmPasswordMsg;
}
