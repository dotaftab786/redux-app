import {
  createStore
} from "redux";

import UserReducer from "./reducer/User.reducer";

const Storage = createStore(UserReducer);

export default Storage;
