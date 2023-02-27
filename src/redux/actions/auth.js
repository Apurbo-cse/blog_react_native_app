import { LOGIN, SIGNUP } from "../../config/urls";
import { apiPost, clearUserData, setUserData } from "../../utils/utlits";
import states from "../states/states";
import store from "../store";
const {dispatch}=store

export const saveUserData=(data)=>{
    dispatch({
        type:states.LOGIN,
        payload:data
    })
}

export function login(data){
   return new Promise((resolve,reject)=>{
    return apiPost(LOGIN,data)
    .then((res)=>{
        if(res.status==200){
            setUserData(res).then(()=>{
                resolve(res)
                saveUserData(res)
            });
            return
        }
        resolve(res)
      
    }).catch(err=>reject(err))
   })
}


export function signup(data){
    return apiPost(SIGNUP,data)
}

export function logout(){
dispatch({type:states.CLEAN_STATE_REDUX});
clearUserData()
}