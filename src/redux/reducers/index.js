import { combineReducers } from "redux";
import states from "../states/states";
import auth from "./auth";
const appReducer=combineReducers({
auth
})
const rootReducer=(state,action)=>{
   if(action.type==states.CLEAN_STATE_REDUX){
    state=undefined
   }
   return appReducer(state,action)
}
export default rootReducer;