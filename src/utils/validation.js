import validator from "validator";

export default function checkValid(state, list = null, isEdit = false) {
  const error = {};
  const { taiKhoan, hoTen, matKhau, email, type } = state;
  if (!taiKhoan) {
    error.taiKhoan = `user name is required`;
  } else if (list && !isEdit) {
    const index = list.findIndex((item) => item.taiKhoan === taiKhoan);
    if (index !== -1) error.taiKhoan = `user name already existed`;
  }
  if (!hoTen) {
    error.hoTen = `full  name is required`;
  }

  if (matKhau) {
    error.matKhau = `password is required`;
  }

  if (!email) {
    error.email = `email is required`;
  } else if (!validator.isEmail(email)) {
    error.email = `email is not correct`;
  }
  console.log(error);
  return error;
}
