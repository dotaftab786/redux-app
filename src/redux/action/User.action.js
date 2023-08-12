import {
  GET_ALL_USER,
} from "../state/User.state";

const getAllUser = ()=>{
  return {
      type: GET_ALL_USER
  }
}

const filter = (selectTag,event)=>{
    const keyword = event.target.value;
    return {
      type: selectTag.current.value,
      keyword: keyword
    }
}


export {
  getAllUser,
  filter
}
