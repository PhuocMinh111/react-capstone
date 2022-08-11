import { request } from "./axios";

export const fetchMovieListApi = () => {
  return request({
    url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
    method: "GET",
  });
};

export const fetchSingleMovieApi = (id) => {
  return request({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
  });
};

export const fetchShowTimeApi = (id) => {
  return request({
    url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
    method: "GET",
  });
};
