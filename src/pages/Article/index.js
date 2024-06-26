import { useChannels } from '@/hooks/useChannels'
import { Link } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Popconfirm } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { Table, Tag, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import { useEffect, useState } from 'react'
import { getArticleListAPI, delArticleAPI } from '@/apis/article'
import { useNavigate } from 'react-router-dom'
const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {  // 准备列数据
    const { channelList } = useChannels()
    const navigate = useNavigate()
    const [ articleList, setArticleList ] = useState([])
    const [ count, setCount] = useState(0)
    const [ regData, setRegData ] = useState({
        status: '',
        channel_id: '',
        begin_pubdate: '',
        end_pubdate :'',
        page: 1,
        per_page: 4
    })


    const state = {
        1:<Tag color="warning">待审核</Tag>,
        2:<Tag color="success">审核通过</Tag>,
    }
    useEffect(()=>{
        const getList = async ()=>{
            const res = await getArticleListAPI(regData)
            setArticleList(res.data.results)
            setCount(res.data.total_count)
        }
        getList()
    }, [regData])

    const onFinish = (formValue)=>{
        setRegData({
            ...regData,
            channel_id: formValue.channel_id,
            status: formValue.status,
            begin_pubdate: formValue.date[0] ? formValue.date[0].format('YYYY-MM-DD') : formValue.date[0],
            end_pubdate: formValue.date[1] ? formValue.date[1].format('YYYY-MM-DD') : formValue.date[1]
    })
    }

    const onPageChange = (page)=>{
        setRegData({
            ...regData,
            page: page
        })
    }

    const onConfirm = async (data)=>{
        await delArticleAPI(data.id)
        setRegData({
            ...regData
        })
    } 

    const columns = [
      {
        title: '封面',
        dataIndex: 'cover',
        width: 120,
        render: cover => {
          return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
        }
      },
      {
        title: '标题',
        dataIndex: 'title',
        width: 220
      },
      {
        title: '状态',
        dataIndex: 'status',
        render: data => state[data]
      },
      {
        title: '发布时间',
        dataIndex: 'pubdate'
      },
      {
        title: '阅读数',
        dataIndex: 'read_count'
      },
      {
        title: '评论数',
        dataIndex: 'comment_count'
      },
      {
        title: '点赞数',
        dataIndex: 'like_count'
      },
      {
        title: '操作',
        render: data => {
          return (
            <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={()=>navigate(`/publish?id=${data.id}`)}/>
            <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this article?"
            onConfirm={()=>onConfirm(data)}
            okText="Yes"
            cancelText="No"
            >

              
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />
            }
              />
            </Popconfirm>
            </Space>
          )
        }
      }
    ]
    // 准备表格body数据
  return (
    <div>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '文章列表' },
          ]} />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: '' }} onFinish={onFinish} >
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={''}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              
              style={{ width: 120 }}
            >
              {channelList.map(item => <Option value={item.id} key={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <div>
      {/*        */}
      <Card title={`根据筛选条件共查询到 ${count} 条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={articleList} 
        pagination={{total: count, pageSize: regData.per_page, onChange: onPageChange}}/>
      </Card>
    </div>
    </div>
  )
}

export default Article
