import { Avatar, Badge, Space } from 'antd'
import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { FaMoon } from 'react-icons/fa'
import Notification from './Popover'

function Header() {
  return (
<div className='flex items-center justify-between'>
  <div>
    <h1 className="text-2xl font-bold hidden md:block">Welcome to FinBank</h1>
    <p className="text-gray-500 text-lg md:text-2xl">Hi, <span className="font-semibold text-lg md:text-2xl">John Doe</span> </p>
  </div>
  <div className='flex items-center space-x-4'>
    <button className='p-4 rounded-2xl shadow bg-white hidden md:block'>
        <FaMoon className='text-2xl' style={{color:"#1a677b"}} />
    </button>
    <Space size={15}>
    <Badge count={1}>
        
    <Notification className="" />
    </Badge>
    
    <Avatar src={""} className='avatar'    shape='circle'/>
    </Space>
  </div>
</div>

    )
}

export default Header