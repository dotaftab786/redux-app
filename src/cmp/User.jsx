import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  useEffect,
  useRef
} from "react";

import {
  getAllUser,
  filter
} from "../redux/action/User.action";
const User = ()=>{
  const selected_option = useRef();

  const dispatch = useDispatch();
  const response = useSelector(response=>response);
  useEffect(()=>{
    dispatch(getAllUser())
  },[dispatch])

  const Tr = ({item})=>{
    const trDesign = (
      <>
        <tr>
          <td>{item.id}</td>
          <td>{item.email}</td>
          <td>{item.mobile}</td>
        </tr>
      </>
    );
    return trDesign;
  }
  const design = (
    <>
      <div className="container py-5">
      {
        response && response.error ? <div className="alert alert-danger">
          <b>{response && response.error.message}</b>
        </div> : null
      }
        <div className="row">
          <div className="col-md-2">
            <select className="P-2 w-100" ref={selected_option}>
              <option value="FILTER_BY_EMAIL">filter by email</option>
              <option value="FILTER_BY_MOBILE">filter by mobile</option>
            </select>
          </div>
          <div className="col-md-10">
            <input
              className="p-2 w-100"
              placeholder="Search"
              onChange={(e)=>dispatch(filter(selected_option,e))}
            />
          </div>
        </div>
        {
          response && response.isLoading ? <i className="fa fa-spinner fa-spin" style={{fontSize:"40px"}}></i> : null
        }
        <table className="table table-bordered my-4">
        <thead>
          <tr>
            <th width="80">S/No</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {
            response && response.data.map(item=><Tr key={item.id} item={item} />)
          }
        </tbody>

        </table>
      </div>
    </>
  );
  return design;
}
export default User;
