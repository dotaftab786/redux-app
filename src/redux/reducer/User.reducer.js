import {
  GET_ALL_USER,
  FILTER_BY_EMAIL,
  FILTER_BY_MOBILE,
  ERROR,
  LOADING
} from "../state/User.state";

const defaultValue = {
  error: null,
  isLoading: false,
  data:[]
}
let filtered = "";
const UserReducer = (state=defaultValue,action)=>{

  if(action.type === GET_ALL_USER){
    return {
      ...state,
      data: action.payload,
      isLoading: false
    }
  }

 if(action.type === FILTER_BY_EMAIL){
   filtered = action.payload.filter(item=>item.email.indexOf(action.keyword) != -1)
   return {
     ...state,
     data: filtered
   }
 }

 if(action.type === FILTER_BY_MOBILE){
   filtered = action.payload.filter(item=>item.mobile.toString().indexOf(action.keyword) != -1)
   return {
     ...state,
     data: filtered
   }
}

 if(action.type === ERROR){
   return {
     ...state,
     error: action.error
   }
 }

 if(action.type === LOADING){
   return {
     ...state,
     isLoading: true
   }
 }
}
export default UserReducer;
