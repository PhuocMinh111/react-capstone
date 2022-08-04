import { createStore, combineReducers } from "redux";
import * as reducer from "./reducer";

const rootReducer = combineReducers({
  ...reducer
});

export default createStore(rootReducer);
