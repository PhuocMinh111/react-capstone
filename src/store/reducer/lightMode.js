import { LIGHT_THEME } from "../../constants/constants";

const DEFAULT = { light: false };

export function themeReducer(state = DEFAULT, { type, payload }) {
  if (type === LIGHT_THEME) {
    state.light = payload;
    return { ...state };
  } else {
    return { ...state };
  }
}
