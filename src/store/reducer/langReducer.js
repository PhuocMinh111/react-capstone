import { CHANGE_LANG } from "../../constants/constants";
const flags = ["/img/vietnam.png", "/img/usa.png", "/img/china.png"];
const INIT_STATE = {
  index: 0,
  value: {
    home: ["Trang chủ", "home", "家", "hogar"],
    movieList: ["Danh sáchh phim", "Movie List", "電影列表", "Lista"],
    desc: ["Miêu tả", "description", "描述", "descripción"],
    date: ["lịch chiếu", "date", "日期", "fecha"],
    name: ["Tên phim", "Movie name", "電影名稱", "nombre"],
    movie: ["Phim", "movie", "電影", "película"],
    img: ["Hình ảnh", "image", "圖片", "imagen"],
    footer: ["thiết kế by", "designed by", "設計者", "diseñada por"],
    login: ["Đăng nhập", "login", "登錄", "acceso"],
    noAcount: [
      "không có tài khoản ,đăng ký",
      "no account ,sign up",
      "報名",
      "sin cuenta, registrate"
    ],
    logout: ["Đăng xuất", "logout", "登出", "cerrar sesión"],
    technology: ["Công nghệ phim", "Technology", "技術", "Tecnología"],
    success: ["Đặt vé thành công", "booking success", "成功", "éxito"],
    detail: ["Chi tiết", "Detail", "細節", "Detalle"],
    showing: ["Phim đang chiếu", "Now Showing", "正在上映", "Demostración"],
    notFound: [
      "Không tìm thấy nội dung",
      "Content not found",
      "未找到內容",
      "extraviado"
    ],
    payment: [
      "Chấp nhận thanh toán",
      "Payment Accepted by",
      "付款接受者",
      "Pago"
    ],
    minute: ["Phút", "minute", "分鐘", "minuto"],
    hello: ["Xin chào", "Hello", "你好", "Hola"],
    book: ["Đặt Vé", "book", "預訂", "reserva"],
    more: ["Xem thêm", "more", "更多的", "más"],
    social: ["Kết nối với chúng tôi", "contact with us", "接觸", "contacto"],
    lang: ["vn", "Eng", "中國人", "española"],
    flag: flags
  },
  final: {}
};

export const langReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_LANG:
      state.index = parseInt(payload);
      for (const [key, value] of Object.entries(state.value)) {
        state.final[key] = value.find((ele, index) => index === state.index);
      }
      console.log(state);
      return { ...state };

    default:
      const defaultIndex = 0;
      for (const [key, value] of Object.entries(state.value)) {
        state.final[key] = value.find((ele, index) => index === defaultIndex);
      }
      return state;
  }
};
