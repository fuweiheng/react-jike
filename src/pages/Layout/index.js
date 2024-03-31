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
import classNames from 'classnames'

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

  const [isNotVisibleMenu, setisNotVisibleMenu] = useState(true)
  const userInfor = useSelector(state => state.user.userInfor)
  const dropdownClass = classNames({
    "drop-down-menu": true,
    "light-shadow": isNotVisibleMenu
  })

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
    setisNotVisibleMenu(!isNotVisibleMenu)
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

              <div className={dropdownClass}>

                <div className="user-card">
                  <div className="user-card-info">

                    <div className="user-card-avatar-wrapper">
                      <div  className="avatar jj-avatar">
                      <img src="https://p26-passport.byteacctimg.com/img/user-avatar/cf072adf8a5e76561fbbcd52b81ca672~100x100.awebp" alt="avatar" className="lazy avatar-img" loading="lazy"></img>
                      </div>
                      </div> 
                      <div className="user-detail">
                        <a href="/user/2198652670983527" className="username">小傅l</a> 
                        <a href="/user/center/signin?avatar_menu" className="ore">矿石:
                        <span>100</span>
                        <svg data-v-2fc855d6="" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ore-arrow-icon"><path data-v-2fc855d6="" d="M6.6094 4.99959L3.22118 1.61137C3.13982 1.53001 3.13982 1.3981 3.22118 1.31674L3.5158 1.02212C3.59716 0.940757 3.72907 0.940757 3.81043 1.02212L7.49328 4.70496C7.656 4.86768 7.656 5.1315 7.49328 5.29422L3.81043 8.97707C3.72907 9.05843 3.59716 9.05843 3.5158 8.97707L3.22118 8.68244C3.13982 8.60108 3.13982 8.46917 3.22118 8.38781L6.6094 4.99959Z"></path></svg>
                        </a>
                        </div>
                  </div>
                      <a href="/user/center/growth" className="progress-bar">
                      <div className="jscore">
                        <div className="jscore-level">掘友等级
                        <span className="bold">JY.3</span>
                        </div> 
                        <div className="progress">
                        <span>71.5 / 150
                        <svg data-v-2fc855d6="" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="jscore-arrow-icon"><path data-v-2fc855d6="" d="M6.6094 4.99959L3.22118 1.61137C3.13982 1.53001 3.13982 1.3981 3.22118 1.31674L3.5158 1.02212C3.59716 0.940757 3.72907 0.940757 3.81043 1.02212L7.49328 4.70496C7.656 4.86768 7.656 5.1315 7.49328 5.29422L3.81043 8.97707C3.72907 9.05843 3.59716 9.05843 3.5158 8.97707L3.22118 8.68244C3.13982 8.60108 3.13982 8.46917 3.22118 8.38781L6.6094 4.99959Z"></path></svg>
                        </span>
                        </div>
                      </div>
                        <div className="bar">
                        <div className="current-bar" ></div>
                        </div>
                        </a>

                        <ul className="actions-count-list">
                        <li className="item"><a herf="/user/2198652670983527/following">
                        <div className="item-count">0</div> 
                        <div className="item-name">关注</div></a></li>
                        <li className="item"><a herf="/user/2198652670983527/likes">
                        <div className="item-count">4</div> 
                        <div className="item-name">赞过</div></a></li>
                        <li className="item"><a herf="/user/2198652670983527/collections">
                        <div className="item-count">6</div> 
                        <div className="item-name">收藏</div></a></li>
                        </ul>
                </div> 

                <ul className="dropdown-list">

                <li className="dropdown-item">
                <a  href="/user/2198652670983527" className="open-menu-page">
                <span className="menu-icon menu-icon-light">
                <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><circle  cx="10.0004" cy="5.46816" r="3.62539" stroke="currentColor" strokeWidth="1.2"></circle><path  d="M12.176 11.8125H7.82554C5.0224 11.8125 2.75 14.0849 2.75 16.888C2.75 17.5888 3.3181 18.1569 4.01889 18.1569H15.9827C16.6834 18.1569 17.2515 17.5888 17.2515 16.888C17.2515 14.0849 14.9792 11.8125 12.176 11.8125Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path></svg>
                </span>
                <span className="menu-name">我的主页</span>
                </a></li>

                <li className="dropdown-item">
                <a href="/user/center/signin?avatar_menu" className="open-menu-page">
                <span className="menu-icon menu-icon-light">
                <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><path  d="M3.75 9.30322H16.25V16.5945C16.25 17.4229 15.5784 18.0945 14.75 18.0945H5.25C4.42157 18.0945 3.75 17.4229 3.75 16.5945V9.30322Z" stroke="currentColor" strokeWidth="1.2"></path><rect  x="2.14453" y="5.01025" width="15.7143" height="4.29307" rx="0.833333" stroke="currentColor" strokeWidth="1.2"></rect><path  d="M10 4.80518L10 17.6233" stroke="currentColor" strokeWidth="1.2"></path><path  d="M12.241 2.30769L12.6272 2.76689V2.76689L12.241 2.30769ZM14.6603 2.57337L15.137 2.20892L15.137 2.20892L14.6603 2.57337ZM9.32129 4.76318L8.9351 4.30398L7.67566 5.36318H9.32129V4.76318ZM14.6975 4.76318V5.36318H15.0096L15.1888 5.10755L14.6975 4.76318ZM12.6272 2.76689C13.1101 2.36072 13.8004 2.43652 14.1837 2.93782L15.137 2.20892C14.3378 1.16378 12.8617 1.00168 11.8548 1.8485L12.6272 2.76689ZM9.70747 5.22237L12.6272 2.76689L11.8548 1.8485L8.9351 4.30398L9.70747 5.22237ZM9.32129 5.36318H14.6975V4.16318H9.32129V5.36318ZM14.1837 2.93782C14.5129 3.3683 14.5132 3.98065 14.2061 4.41881L15.1888 5.10755C15.7839 4.25852 15.7967 3.07181 15.137 2.20892L14.1837 2.93782Z" fill="currentColor"></path><path  d="M7.62227 2.30769L7.23609 2.76689V2.76689L7.62227 2.30769ZM5.20295 2.57337L4.72632 2.20892L4.72632 2.20892L5.20295 2.57337ZM10.542 4.76318L10.9282 4.30398L12.1876 5.36318H10.542V4.76318ZM5.16581 4.76318V5.36318H4.85364L4.67447 5.10755L5.16581 4.76318ZM7.23609 2.76689C6.75313 2.36072 6.06288 2.43652 5.67958 2.93782L4.72632 2.20892C5.52546 1.16378 7.00155 1.00168 8.00846 1.8485L7.23609 2.76689ZM10.1558 5.22237L7.23609 2.76689L8.00846 1.8485L10.9282 4.30398L10.1558 5.22237ZM10.542 5.36318H5.16581V4.16318H10.542V5.36318ZM5.67958 2.93782C5.35042 3.3683 5.35004 3.98065 5.65714 4.41881L4.67447 5.10755C4.0794 4.25852 4.06653 3.07181 4.72632 2.20892L5.67958 2.93782Z" fill="currentColor"></path></svg>
                </span>
                <span className="menu-name">成长福利</span>
                </a></li>

                <li className="dropdown-item">
                <a  href="/user/center/signin?avatar_menu" className="open-menu-page">
                <span className="menu-icon badge menu-icon-light">
                <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect  x="3.46094" y="2.13086" width="13.0967" height="15.7249" rx="1.5" stroke="#8A919F" strokeWidth="1.2"></rect><path  d="M7.45052 10.8334C7.45722 10.6305 7.54084 10.4377 7.68441 10.2941L10.8488 7.12981C11.2394 6.7393 11.8725 6.73931 12.263 7.12983L13.0134 7.88015C13.4039 8.27068 13.4039 8.90385 13.0134 9.29438L9.84893 12.4587C9.70537 12.6022 9.5126 12.6858 9.30968 12.6925L8.02763 12.7349C7.68085 12.7464 7.39667 12.4622 7.40813 12.1154L7.45052 10.8334Z" stroke="#8A919F" strokeWidth="1.2"></path><path  d="M2.30859 6.14648H4.61629" stroke="#8A919F" strokeWidth="1.2" strokeLinecap="round"></path><path  d="M2.30859 9.99219H4.61629" stroke="#8A919F" strokeWidth="1.2" strokeLinecap="round"></path><path  d="M2.30859 13.8389H4.61629" stroke="#8A919F" strokeWidth="1.2" strokeLinecap="round"></path></svg>
                </span>
                <span className="menu-name">闪念笔记</span></a></li>

                <li className="dropdown-item">
                <a href="/vip?utm_source=web_profile" className="open-menu-page">
                <span className="menu-icon menu-icon-light">
                <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><path  d="M8.48696 16.866L11.7141 16.866L18.5 7.5181L15.7187 5.10263L10.0447 12.6364L4.27982 5.10263L1.55487 7.5181L8.48696 16.866Z" stroke="#8A919F" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path  d="M6.5625 3.06445L10 7.54883L13.4062 3.06445" stroke="#8A919F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                <span className="menu-name">会员中心</span>
                </a></li>

                <li  className="dropdown-item"><a href="/my-course" className="open-menu-page">
                <span className="menu-icon menu-icon-light">
                <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><path  d="M4.62218 2.68165C3.64897 2.29236 2.59033 3.0091 2.59033 4.05728V13.961C2.59033 14.2639 2.77476 14.5363 3.05601 14.6488L8.88416 16.98C9.59939 17.2661 10.3973 17.2661 11.1125 16.98L16.9406 14.6488C17.2219 14.5363 17.4063 14.2639 17.4063 13.961V4.05728C17.4063 3.0091 16.3477 2.29236 15.3745 2.68165L11.1125 4.38644C10.3973 4.67253 9.59939 4.67253 8.88416 4.38644L4.62218 2.68165Z" stroke="currentColor" strokeWidth="1.2"></path><path  d="M9.99609 7.42676V14.094" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path></svg>
                </span> 
                <span className="menu-name">课程中心</span>
                </a></li>
                
                <li className="dropdown-item"><a  href="/coupon/list" className="open-menu-page">
                <span className="menu-icon menu-icon-light">
                <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><path  d="M3.60938 16.1995L3.60938 15.5995H3.60938V16.1995ZM17.8867 14.6995L18.4867 14.6995V14.6995H17.8867ZM13.82 15.7116L14.3921 15.5309L13.82 15.7116ZM10.9207 15.7116L10.3486 15.5309L10.9207 15.7116ZM10.9211 4.29008L10.3491 4.47117L10.9211 4.29008ZM13.8196 4.29008L13.2476 4.10899L13.8196 4.29008ZM12.3703 5.98566C13.3298 5.98566 14.1183 5.3346 14.3916 4.47117L13.2476 4.10899C13.1179 4.51851 12.761 4.78566 12.3703 4.78566V5.98566ZM10.3491 4.47117C10.6224 5.3346 11.4109 5.98566 12.3703 5.98566V4.78566C11.9797 4.78566 11.6227 4.51851 11.4931 4.10899L10.3491 4.47117ZM3.60938 4.40273H10.3487V3.20273H3.60938V4.40273ZM2.70938 5.30273C2.70938 4.80568 3.11232 4.40273 3.60938 4.40273V3.20273C2.44958 3.20273 1.50937 4.14294 1.50937 5.30273H2.70938ZM2.70938 14.6995V5.30273H1.50937V14.6995H2.70938ZM3.60938 15.5995C3.11232 15.5995 2.70938 15.1966 2.70938 14.6995H1.50937C1.50937 15.8593 2.44958 16.7995 3.60938 16.7995V15.5995ZM10.3482 15.5995L3.60938 15.5995L3.60937 16.7995L10.3482 16.7995V15.5995ZM12.3703 14.0149C11.4103 14.0149 10.6215 14.6668 10.3486 15.5309L11.4929 15.8923C11.6223 15.4824 11.9795 15.215 12.3703 15.215V14.0149ZM14.3921 15.5309C14.1192 14.6668 13.3304 14.0149 12.3703 14.0149V15.215C12.7612 15.215 13.1184 15.4824 13.2478 15.8923L14.3921 15.5309ZM16.3867 15.5995H14.3925V16.7995H16.3867V15.5995ZM17.2867 14.6995C17.2867 15.1966 16.8838 15.5995 16.3867 15.5995V16.7995C17.5465 16.7995 18.4867 15.8593 18.4867 14.6995L17.2867 14.6995ZM17.2867 5.30273V14.6995H18.4867V5.30273H17.2867ZM16.3867 4.40273C16.8838 4.40273 17.2867 4.80568 17.2867 5.30273H18.4867C18.4867 4.14294 17.5465 3.20273 16.3867 3.20273V4.40273ZM14.392 4.40273H16.3867V3.20273H14.392V4.40273ZM13.2478 15.8923C13.3762 16.2987 13.7608 16.7995 14.3925 16.7995V15.5995C14.4079 15.5995 14.4219 15.603 14.4317 15.6071C14.4404 15.6108 14.4417 15.6132 14.4372 15.6091C14.4325 15.6048 14.4242 15.5959 14.4151 15.5812C14.4059 15.5665 14.3979 15.5492 14.3921 15.5309L13.2478 15.8923ZM10.3482 16.7995C10.9798 16.7995 11.3645 16.2987 11.4929 15.8923L10.3486 15.5309C10.3428 15.5492 10.3348 15.5665 10.3256 15.5812C10.3164 15.5959 10.3082 15.6048 10.3035 15.6091C10.2989 15.6132 10.3002 15.6108 10.309 15.6071C10.3187 15.603 10.3328 15.5995 10.3482 15.5995V16.7995ZM11.4931 4.10899C11.3645 3.7029 10.9799 3.20273 10.3487 3.20273V4.40273C10.3332 4.40273 10.3192 4.39927 10.3095 4.39517C10.3007 4.39148 10.2994 4.38905 10.304 4.39315C10.3086 4.39737 10.3169 4.40628 10.3261 4.42101C10.3352 4.43567 10.3433 4.45293 10.3491 4.47117L11.4931 4.10899ZM14.3916 4.47117C14.3974 4.45293 14.4055 4.43567 14.4146 4.42101C14.4238 4.40628 14.432 4.39737 14.4367 4.39315C14.4412 4.38905 14.4399 4.39148 14.4312 4.39517C14.4214 4.39927 14.4074 4.40273 14.392 4.40273V3.20273C13.7608 3.20273 13.3762 3.7029 13.2476 4.10899L14.3916 4.47117Z" fill="#8A919F"></path><line  x1="12.5414" y1="7.47012" x2="12.5414" y2="12.5335" stroke="#8A919F" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="0.2 2"></line></svg>
                </span>
                <span  className="menu-name">我的优惠</span>
                </a></li>

                <li className="dropdown-item">
                <a href="/myregistration" className="open-menu-page">
                <span  className="menu-icon menu-icon-light">
                <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><path  d="M3.07812 12.4781C2.74675 12.4781 2.47812 12.7468 2.47812 13.0781C2.47812 13.4095 2.74675 13.6781 3.07812 13.6781V12.4781ZM2.47812 17.6935C2.47812 18.0249 2.74675 18.2935 3.07812 18.2935C3.4095 18.2935 3.67813 18.0249 3.67813 17.6935H2.47812ZM16.1373 10.6178L15.6763 11.002L16.1373 10.6178ZM15.0145 7.52032L14.5263 7.17158L15.0145 7.52032ZM16.4933 5.44998L16.0051 5.10124L16.4933 5.44998ZM4.57812 3.67813H15.2727V2.47812H4.57812V3.67813ZM16.0051 5.10124L14.5263 7.17158L15.5027 7.86906L16.9816 5.79873L16.0051 5.10124ZM14.6218 9.73656L15.6763 11.002L16.5982 10.2337L15.5437 8.96834L14.6218 9.73656ZM14.9849 12.4781H3.07812V13.6781H14.9849V12.4781ZM2.47812 4.57812V17.6935H3.67813V4.57812H2.47812ZM15.6763 11.002C16.1648 11.5882 15.748 12.4781 14.9849 12.4781V13.6781C16.7654 13.6781 17.738 11.6015 16.5982 10.2337L15.6763 11.002ZM14.5263 7.17158C13.9711 7.94881 14.0104 9.0028 14.6218 9.73656L15.5437 8.96834C15.2816 8.65387 15.2648 8.20216 15.5027 7.86906L14.5263 7.17158ZM15.2727 3.67813C16.0048 3.67813 16.4306 4.50556 16.0051 5.10124L16.9816 5.79873C17.9744 4.4088 16.9808 2.47812 15.2727 2.47812V3.67813ZM4.57812 2.47812C3.41833 2.47812 2.47812 3.41833 2.47812 4.57812H3.67813C3.67813 4.08107 4.08107 3.67813 4.57812 3.67813V2.47812Z" fill="#8A919F"></path><line  x1="5.98281" y1="7.09336" x2="9.3982" y2="7.09336" stroke="#8A919F" strokeWidth="1.2" strokeLinecap="round"></line></svg>
                </span>
                <span  className="menu-name">我的报名</span>
                </a></li>

                <li  className="dropdown-item">
                <a  href="/footmark" className="open-menu-page">
                <span  className="menu-icon menu-icon-light">
                <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><path  d="M12.7008 10.75L12.7008 13.1692C12.7008 14.3564 13.6632 15.3188 14.8504 15.3188V15.3188C16.0376 15.3188 17 14.3564 17 13.1692L17 10.75" stroke="#8A919F" strokeWidth="1.2"></path><path  d="M11.3201 5.39275C11.3201 3.50114 12.7118 1.89774 14.5846 1.6317V1.6317C14.7618 1.60653 14.9417 1.60653 15.1189 1.6317V1.6317C16.9917 1.89774 18.3834 3.50114 18.3834 5.39275V9.67128C18.3834 10.4747 17.7321 11.126 16.9287 11.126H12.7747C11.9714 11.126 11.3201 10.4747 11.3201 9.67128V5.39275Z" stroke="#8A919F" strokeWidth="1.2"></path><path  d="M11.3203 8.14209H18.3834" stroke="#8A919F" strokeWidth="1.2"></path><path  d="M3.01326 14L3.01326 16.4192C3.01326 17.6064 3.97568 18.5688 5.16288 18.5688V18.5688C6.35008 18.5688 7.3125 17.6064 7.3125 16.4192L7.3125 14" stroke="#8A919F" strokeWidth="1.2"></path><path  d="M1.63257 8.64275C1.63257 6.75114 3.02429 5.14774 4.8971 4.8817V4.8817C5.0743 4.85653 5.25417 4.85653 5.43138 4.8817V4.8817C7.30419 5.14774 8.6959 6.75114 8.6959 8.64275V12.9213C8.6959 13.7247 8.04462 14.376 7.24122 14.376H3.08725C2.28385 14.376 1.63257 13.7247 1.63257 12.9213V8.64275Z" stroke="#8A919F" strokeWidth="1.2"></path><path  d="M1.63281 11.3921H8.69586" stroke="#8A919F" strokeWidth="1.2"></path></svg>
                </span>
                <span  className="menu-name">我的足迹</span>
                </a></li>
                </ul> 

                <div  className="group">
                <a  href="/user/settings" className="setting">我的设置</a> 
                <a href="/footmark" className="logout">退出登录</a>
                </div>
              </div>
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
