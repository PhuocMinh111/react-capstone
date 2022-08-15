import { request } from "./axios";

export function fetchUserLogin(data) {
  return request({
    data: data,
    url: "/QuanLyNguoiDung/DangNhap",
    method: "POST",
  });
}
export function fetchSignIn(data) {
  return request({
    data: {
      ...data,
      maNhom: "GP02",
      soDt: "1231231",
    },
    url: "/QuanLyNguoiDung/DangKy",
    method: "POST",
  });
}
