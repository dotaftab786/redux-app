import {
  useSelector
} from "react-redux";

const Register = ()=>{
  const response = useSelector((response)=>response);
  const design = (
    <>
      <h1>Register</h1>
      <p>{response.message}</p>
    </>
  );
  return design;
}

export default Register;
