import User from "./cmp/User"
import Register from "./cmp/Register"
import "bootstrap/dist/css/bootstrap.min.css";
import Storage from "./redux/Storage";

import {
  Provider
} from "react-redux";
const App = ()=>{

  const design = (
    <>
      <Provider store={Storage}>
        <h1>Redux</h1>
        <User />
      </Provider>
    </>
  );
  return design;
}

export default App;
