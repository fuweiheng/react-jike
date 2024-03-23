import { request } from "@/utils"

const loginAPI = (formData)=>{
    return request({
        url: '/authorizations',
        method: "POST",
        data: formData
    })
}

const getProfileAPI = (formData)=>{
    return request({
        url: '/user/profile',
        method: "GET"
    })
}



export { loginAPI, getProfileAPI }