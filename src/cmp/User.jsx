import {
  useDispatch,
  useSelector
} from "react-redux";

const User = ()=>{
  const setAction = useDispatch();
  const response = useSelector((response)=>response);
  const design = (
    <>
      <h1>User component</h1>
      <p>{response.message}</p>
      <button onClick={()=>setAction({
        type:"user"
      })}>user btn</button>
    </>
  );
  return design;
}
export default User;
