import { request } from "@/utils"

const getChannelAPI = ()=>{
    return request({
        url: '/channels',
        method: 'GET'
    })
}

const createArticleAPI = (data)=>{
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data:data
    })
}

const updateArticleAPI = (data)=>{
    return request({
        url: `/mp/articles/${data.id}?draft=false`,
        method: 'PUT',
        data:data
    })
}

const getArticleListAPI = (params)=>{
    return request({
        url: '/mp/articles',
        method: 'GET',
        params
    })
}

const delArticleAPI = (id)=>{
    return request({
        url: `/mp/articles/${id}`,
        method: 'DEL',
    })
}

const getArticleById = (id)=>{
    return request({
        url: `/mp/articles/${id}`,
        method: 'GET'
    })
}
export { getChannelAPI, createArticleAPI, getArticleListAPI, delArticleAPI, getArticleById, updateArticleAPI }