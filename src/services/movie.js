import { request } from "./axios";

export const fetchMovieListApi = () => {
  return request({
    url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    method: "GET"
  });
};
