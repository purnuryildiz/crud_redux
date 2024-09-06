//first, import "createStore" from redux library

import { combineReducers, createStore } from "redux";
import userReducer from "./userReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

const store = createStore(rootReducer);

export default store;
