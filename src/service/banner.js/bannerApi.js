import { request } from "../axios";

export default function fetchBannerApi() {
  return request({
    url: "/QuanLyPhim/LayDanhSachBanner",
    method: "get"
  });
}
