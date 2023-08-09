import {
  createStore
} from "redux";

import {
  useState
} from "react";

const User = ()=>{

  const[value,setValue] = useState("");
  //decision
  const reducer = (state=value,action)=>{
    if(action.type === "login"){
      return state = "Login Success";
    }else{
      return state = "Login Failed";
    }
  }
  //store
  const store = createStore(reducer);

  //response
  store.subscribe(()=>{
    setValue(store.getState)
  });

  const design = (
    <>
      <h1>{value}</h1>
      <button onClick={()=>store.dispatch({
        type: "login" //action
      })}>user btn</button>
    </>
  );
  return design;
}
export default User;
