import {
  GET_ALL_USER,
  FILTER_BY_EMAIL,
  FILTER_BY_MOBILE
} from "../state/User.state";

import userData from "../../data";
const defaultValue = {
  data:[]
}
let filtered = "";
const UserReducer = (state=defaultValue,action)=>{
  if(action.type === GET_ALL_USER){
    return {
      ...state,
      data: userData
    }
  }

 if(action.type === FILTER_BY_EMAIL){
   filtered = userData.filter(item=>item.email.indexOf(action.keyword) != -1)
   return {
     data: filtered
   }
 }

 if(action.type === FILTER_BY_MOBILE){
   filtered = userData.filter(item=>item.mobile.toString().indexOf(action.keyword) != -1)
   return {
     data: filtered
   }
}

}
export default UserReducer;
