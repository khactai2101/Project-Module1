function cartProduct(index) {
  const foodDBs = getDataFromLocal("foods"); //^ --> láy dữ liệu foodDB

  const productUSer = foodDBs[index];

  const cartUser = userLogin.cart;

  //* check xem đã có sản phẩm hay chưa

  let resultProduct = {};
  if (cartUser.length === 0) {
    resultProduct = {
      ...productUSer,
      id: 0,
      idProduct: productUSer.id,
      quantity: 1,
    };
    cartUser.push(resultProduct);
  } else {
    // * tìm id xem có ko đển quantity + 1
    const checkCart = cartUser.find(
      (item) => item.idProduct === productUSer.id
    );
    console.log("xxxx", checkCart);

    if (checkCart) {
      checkCart.quantity += 1;
    } else {
      //* nếu ko sẽ + quantity lên 1
      const maxId = Math.max(...cartUser.map((item) => item.id)); //* hàm tìm id max
      resultProduct = {
        ...productUSer,
        id: maxId + 1,
        idProduct: productUSer.id,
        quantity: 1,
      };
      cartUser.push(resultProduct);
    }
  }
  // console.log(userLogin.carts);

  userLogin.carts = cartUser;

  setDataToLocal("userLogin", userLogin);

  const addAccount = accounts.find((item) => item.id === userLogin.id);

  if (addAccount) {
    addAccount.carts = userLogin.carts;
    console.log(accounts);
    setDataToLocal("accounts", accounts);
  }
}
