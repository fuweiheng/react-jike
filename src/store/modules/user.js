import { createSlice } from "@reduxjs/toolkit"
import { removeToken } from "@/utils"
import { setToken as _setToken, getToken } from "@/utils"
import { loginAPI, getProfileAPI } from "@/apis/user"
const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '' ,
        userInfor: {}
    },
    reducers: {
        setToken(state, action){
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfor(state, action){
            state.userInfor = action.payload
        },
        clearUserInfor(state){
            state.token = ''
            state.userInfor = {}
            removeToken()
        }
        
    }
})


const { setToken, setUserInfor, clearUserInfor } = userStore.actions
const userReducer = userStore.reducer

const fecthLogin = (loginForm)=>{
    return async (dispatch)=>{
        const res = await loginAPI(loginForm)
        dispatch(setToken(res.data.token))
    }
}

const fecthUserInfor = ()=>{
    return async (dispatch)=>{
        const res = await getProfileAPI()
        dispatch(setUserInfor(res.data))
    }
}

export {  fecthLogin,fecthUserInfor, clearUserInfor }
export default userReducer