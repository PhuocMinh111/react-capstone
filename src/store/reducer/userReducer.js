import { SET_USER_LOGIN } from "../../constants/constants";

const STATE = {
  user: null
};

export const userReducer = (state = STATE, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN:
      state.user = payload;
      return { ...state };
    default:
      return state;
  }
};
