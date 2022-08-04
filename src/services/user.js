import { request } from "./axios";

export function fetchUserLogin(data) {
  return request({
    data: data,
    url: "/QuanLyNguoiDung/DangNhap",
    method: "POST"
  });
}
