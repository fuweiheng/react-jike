import { Layout, Menu, Popconfirm, Space, Input, Button } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet,useNavigate, useLocation  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthUserInfor, clearUserInfor } from '@/store/modules/user'
import avatar from "@/assets/avatar.jpg"

const { Header } = Layout

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const [isVisibleMenu, setIsVisibleMenu] = useState(false)
  const userInfor = useSelector(state => state.user.userInfor)

  useEffect(()=>{
    dispatch(fecthUserInfor())
  },[dispatch])
  
  const onMenuClick = (route)=>{
    const path = route.key
    navigate(path)
  }
  const onConfirm = ()=>{
    dispatch(clearUserInfor())
    navigate('/login')
  }
  const onLogoClick = () =>{
    console.log('clicked')
    navigate('/')
  }
  const onUserMenuClick = ()=>{
    setIsVisibleMenu(!isVisibleMenu)
  }


  return (
    <Layout>
      <Header className="header" style={{  }}>
          <div className="logo" onClick={onLogoClick}/>
          <div className='main-nav'>
            <Menu
                mode="horizontal"
                theme="dark"
                selectedKeys={location.pathname}
                items={items}
                onClick={onMenuClick}
                style={{ flex: 1, minWidth: 0 }}></Menu>

          </div>
          <div>
          </div>

          <Space.Compact
            style={{
              width: '40%', flex: 1
            }}>
            <Input defaultValue="Combine input and button" />
            <Button type="primary">Submit</Button>
          </Space.Compact>

          <div className="user-info">

            <div className="user-menu">
              <div className="user-avatar" onClick={onUserMenuClick}>
              <img loading="eager" src={avatar} alt='' className='avatar'></img>
              </div>

              {isVisibleMenu && <div class="drop-down-menu light-shadow">

                <div class="user-card">
                  <div class="user-card-info">

                    <div class="user-card-avatar-wrapper">
                      <div  class="avatar jj-avatar">
                      <img src="https://p26-passport.byteacctimg.com/img/user-avatar/cf072adf8a5e76561fbbcd52b81ca672~100x100.awebp" alt="avatar" class="lazy avatar-img" loading="lazy"></img>
                      </div>
                      </div> 
                      <div class="user-detail">
                        <a href="/user/2198652670983527" class="username">小傅l</a> 
                        <a href="/user/center/signin?avatar_menu" class="ore">矿石:
                        <span>100</span>
                        <svg data-v-2fc855d6="" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="ore-arrow-icon"><path data-v-2fc855d6="" d="M6.6094 4.99959L3.22118 1.61137C3.13982 1.53001 3.13982 1.3981 3.22118 1.31674L3.5158 1.02212C3.59716 0.940757 3.72907 0.940757 3.81043 1.02212L7.49328 4.70496C7.656 4.86768 7.656 5.1315 7.49328 5.29422L3.81043 8.97707C3.72907 9.05843 3.59716 9.05843 3.5158 8.97707L3.22118 8.68244C3.13982 8.60108 3.13982 8.46917 3.22118 8.38781L6.6094 4.99959Z"></path></svg>
                        </a>
                        </div>
                  </div>
                      <a href="/user/center/growth" class="progress-bar">
                      <div class="jscore">
                        <div class="jscore-level">掘友等级
                        <span class="bold">JY.3</span>
                        </div> 
                        <div class="progress">
                        <span>71.5 / 150
                        <svg data-v-2fc855d6="" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="jscore-arrow-icon"><path data-v-2fc855d6="" d="M6.6094 4.99959L3.22118 1.61137C3.13982 1.53001 3.13982 1.3981 3.22118 1.31674L3.5158 1.02212C3.59716 0.940757 3.72907 0.940757 3.81043 1.02212L7.49328 4.70496C7.656 4.86768 7.656 5.1315 7.49328 5.29422L3.81043 8.97707C3.72907 9.05843 3.59716 9.05843 3.5158 8.97707L3.22118 8.68244C3.13982 8.60108 3.13982 8.46917 3.22118 8.38781L6.6094 4.99959Z"></path></svg>
                        </span>
                        </div>
                      </div>
                        <div class="bar">
                        <div class="current-bar" ></div>
                        </div>
                        </a>

                        <ul class="actions-count-list">
                        <li class="item"><a herf="/user/2198652670983527/following">
                        <div class="item-count">0</div> 
                        <div class="item-name">关注</div></a></li>
                        <li class="item"><a herf="/user/2198652670983527/likes">
                        <div class="item-count">4</div> 
                        <div class="item-name">赞过</div></a></li>
                        <li class="item"><a herf="/user/2198652670983527/collections">
                        <div class="item-count">6</div> 
                        <div class="item-name">收藏</div></a></li>
                        </ul>
                </div> 

                <ul class="dropdown-list">

                <li class="dropdown-item">
                <a  href="/user/2198652670983527" class="open-menu-page">
                <span class="menu-icon menu-icon-light">
                </span>
                <span class="menu-name">我的主页</span>
                </a></li>

                <li class="dropdown-item">
                <a href="/user/center/signin?avatar_menu" class="open-menu-page">
                <span class="menu-icon menu-icon-light">
                </span>
                <span class="menu-name">成长福利</span>
                </a></li>

                <li class="dropdown-item">
                <a  href="/user/center/signin?avatar_menu" class="open-menu-page">
                <span class="menu-icon badge menu-icon-light">
                </span>
                <span class="menu-name">闪念笔记</span></a></li>

                <li class="dropdown-item">
                <a href="/vip?utm_source=web_profile" class="open-menu-page">
                <span class="menu-icon menu-icon-light">
                </span>
                <span class="menu-name">会员中心</span>
                </a></li>

                <li  class="dropdown-item"><a href="/my-course" class="open-menu-page">
                <span class="menu-icon menu-icon-light">
                </span> 
                <span class="menu-name">课程中心</span>
                </a></li>
                
                <li class="dropdown-item"><a  href="/coupon/list" class="open-menu-page">
                <span class="menu-icon menu-icon-light">
                </span>
                <span  class="menu-name">我的优惠</span>
                </a></li>

                <li class="dropdown-item">
                <a href="/myregistration" class="open-menu-page">
                <span  class="menu-icon menu-icon-light">
                </span>
                <span  class="menu-name">我的报名</span>
                </a></li>

                <li  class="dropdown-item">
                <a  href="/footmark" class="open-menu-page">
                <span  class="menu-icon menu-icon-light">
                </span>
                <span  class="menu-name">我的足迹</span>
                </a></li>
                </ul> 

                <div  class="group">
                <a  href="/user/settings" class="setting">我的设置</a> 
                <a href="/footmark" class="logout">退出登录</a>
                </div>
              </div>}
          </div>
            <span className="user-name" >{userInfor.name}</span>
            <span className="user-logout">
              <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirm} >
                <LogoutOutlined /> 退出
              </Popconfirm>
            </span>
          </div>

      </Header>
        <Outlet />
    </Layout>
  )
}
export default GeekLayout
