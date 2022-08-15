import { LOG_OUT, SET_USER_LOGIN } from "../../constants/constants";
const userString = localStorage.getItem("USER_ACESS");
const user = JSON.parse(userString);
const STATE = {
  user: user || null,
};

export const userReducer = (state = STATE, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN:
      state.user = payload;
      return { ...state };
    case LOG_OUT:
      localStorage.removeItem("USER_ACESS");
      state.user = null;
      return { ...state };
    default:
      return state;
  }
};
