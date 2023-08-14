import {
  createStore,
  applyMiddleware
} from "redux";

import thunk from "redux-thunk";

import UserReducer from "./reducer/User.reducer";

const Storage = createStore(UserReducer,{},applyMiddleware(thunk));

export default Storage;
