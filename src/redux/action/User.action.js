import {
  GET_ALL_USER,
  ERROR,
  LOADING
} from "../state/User.state";

import axios from "axios";

let payload = [];

const getAllUser = ()=>{
  try {
    return async(dispatch)=>{

      dispatch({
        type: LOADING
      });
      const {data} = await axios({
        method: "get",
        url: "http://localhost:3434/dummy"
      })
      payload = data;
      dispatch({
        type: GET_ALL_USER,
        payload: data
      })
    }
  } catch (err) {
    return (dispatch)=>{
      dispatch({
        type: ERROR,
        error: err
      })
    }
  }

}

const filter = (selectTag,event)=>{
    const keyword = event.target.value;
    return {
      type: selectTag.current.value,
      keyword: keyword,
      payload: payload
    }
}


export {
  getAllUser,
  filter
}
