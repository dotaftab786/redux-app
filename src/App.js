import User from "./cmp/User"
import Register from "./cmp/Register"

import {
  createStore,
} from "redux";

import {
  Provider
} from "react-redux";

const App = ()=>{
  const reducer = (state={},action)=>{
    if(action.type === "user"){
    return {
      message:"successs"
    }
  }else{
    return {
      message:"failed"
    }
  }
  }
  const store = createStore(reducer);
  const design = (
    <>
      <Provider store={store}>
        <h1>Redux</h1>
        <User />
        <Register />
      </Provider>
    </>
  );
  return design;
}

export default App;
