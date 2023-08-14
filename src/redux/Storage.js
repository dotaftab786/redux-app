import {
  createStore,
  applyMiddleware
} from "redux";

import logger from "redux-logger";

import UserReducer from "./reducer/User.reducer";

const Storage = createStore(UserReducer,{},applyMiddleware(logger));

export default Storage;
