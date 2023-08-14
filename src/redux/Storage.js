import {
  createStore,
  applyMiddleware
} from "redux";

import UserReducer from "./reducer/User.reducer";

const report = (Storage)=>(next)=>(action)=>{
  console.log("First middleware code executed");
  next(action);
}

const demo = (Storage)=>(next)=>(action)=>{
  console.log("Second middleware code executed");
  next(action)
}

const Storage = createStore(UserReducer,{},applyMiddleware(report,demo));

export default Storage;
