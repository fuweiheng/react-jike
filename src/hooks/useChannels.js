import { useEffect, useState } from 'react'
import { getChannelAPI } from '@/apis/article'

const useChannels = ()=>{
    const [channelList, setChannelList] = useState([])
    useEffect(()=>{
        const getChannellist = async ()=>{
            const res = await getChannelAPI()
            setChannelList(res.data.channels)
        } 
        getChannellist()
    },[])
    return {
        channelList
    }
}

export { useChannels } 