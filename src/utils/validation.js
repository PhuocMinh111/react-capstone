import validator from "validator";

export default function checkValid(state, list = null, isEdit = false) {
  const error = {};
  const { userName, hoTen, matKhau, email, type } = state;
  if (!userName) {
    error.userName = `user name is required`;
  } else if (list && !isEdit) {
    const index = list.findIndex((item) => item.userName === userName);
    if (index !== -1) error.userName = `user name already existed`;
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
  console.log("error");
  return error;
}
