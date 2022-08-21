import validator from "validator";

export default function checkValid(state, isEdit = false) {
  const error = {};
  console.log(state);
  const { taiKhoan, hoTen, matKhau, email, type } = state;
  if (taiKhoan.length < 1) {
    error.taiKhoan = `user name is required`;
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
