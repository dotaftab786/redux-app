import {
  GET_ALL_USER,
} from "../state/User.state";

const getAllUser = ()=>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch({
        type:GET_ALL_USER
      });
    },5000)

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
