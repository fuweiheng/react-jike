import { useChannels } from '@/hooks/useChannels'
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useSearchParams } from 'react-router-dom'
import './index.scss'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { createArticleAPI, getArticleById, updateArticleAPI } from '@/apis/article'
const { Option } = Select


const Publish = () => {

    const {channelList} = useChannels()
    const [imageList, setImageList] = useState([])
    const [imageType, setImageType] = useState(1)

    const [ searchParams ] = useSearchParams()
    const articleID = searchParams.get('id')
    const [ form ] =Form.useForm()
    useEffect(()=>{
      
      async function getArticleDetail(){
        const res = await getArticleById(articleID)
        const data = res.data
        const cover = data.cover
        form.setFieldsValue({
          ...data,
          type: cover.type,
          
        })
        setImageType(cover.type)
        setImageList(cover.images.map( url => {
          return {url}
        }))
      }
      
      articleID && getArticleDetail()
    },[articleID, form])

    const onFinish = (formData)=>{
        if(imageType !== imageList.length){
            alert('不匹配')
            return 
        }
        const {title, content, channel_id } = formData
        const regData = {
            'title': title,
            'content': content,
            'cover': {
                type: imageType,
                images: imageList.map(item => {
                  if(item.response){
                  return item.response.data.url
                  }
                  else{
                    return item.url
                  }
                })
            },
            'channel_id': channel_id
        }
        if(!articleID){
        createArticleAPI(regData)
        }
        else{
          updateArticleAPI({...regData, id:articleID})
        }
    }
    const onChange = (value)=>{
        console.log(value)
        setImageList(value.fileList)
    }
    const onTypeChange= (e)=>{
        console.log(e.target.value)
        setImageType(e.target.value)
    }


  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: `${articleID?'编辑' : '发布'}文章` },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: imageType }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map(item=><Option value={item.id} key={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
          <Form.Item name="type">
            <Radio.Group onChange={onTypeChange}>
            <Radio value={1}>单图</Radio>
            <Radio value={3}>三图</Radio>
            <Radio value={0}>无图</Radio>
            </Radio.Group>
          </Form.Item>

          {
          imageType > 0 && <Upload
            listType="picture-card"
            showUploadList
            action={'http://geek.itheima.net/v1_0/upload'}
            name='image'
            onChange={onChange}
            maxCount={imageType}
            fileList={imageList}
          >
            <div style={{ marginTop: 8 }}>
            <PlusOutlined />
            </div>
          </Upload>
          }
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >


            <ReactQuill 
            className='publish-quill'
            theme='snow'
            placeholder='请输入文章内容'
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish
