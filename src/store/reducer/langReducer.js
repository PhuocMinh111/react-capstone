import { CHANGE_LANG } from "../../constants/constants";

const INIT_STATE = {
  index: 0,
  value: {
    home: ["Trang chủ", "home"],
    movieList: ["Danh sáchh phim"],
    desc: ["Miêu tả", "description"],
    date: ["lịch chiếu", "date"],
    name: ["Tên phim", "Movie name"],
    movie: ["Phim", "movie"],
    img: ["Hình ảnh", "image"],
    footer: ["thiết kế by", "designed by"],
    login: ["Đăng nhập", "login"],
    logout: ["Đăng xuất", "logout"],
    technology: ["Công nghệ phim", "Technology"],
    detail: ["Chi tiết", "Detail"],
    showing: ["Phim đang chiếu", "Now Showing"],
    notFound: ["Không tìm thấy nội dung", "Content not found"],
    payment: ["Chấp nhận thanh toán", "Payment Accepted by"],
    minute: ["Phút", "minute"],
    book: ["Đặt Vé", "book"],
    more: ["Xem thêm", "more"],
    social: ["Kết nối với chúng tôi", "contact with us"],
    lang: ["vn", "Eng"],
    flag: ["🇻🇳", "🇬🇧"],
  },
  final: {},
};

export const langReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_LANG:
      state.index = state.index === 0 ? 1 : 0;
      for (const [key, value] of Object.entries(state.value)) {
        state.final[key] = value.find((ele, index) => index === state.index);
      }
      console.log(state);
      return { ...state };

    default:
      for (const [key, value] of Object.entries(state.value)) {
        state.final[key] = value.find((ele, index) => index === state.index);
      }
      return state;
  }
};
