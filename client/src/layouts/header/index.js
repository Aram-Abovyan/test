// react
import React from 'react'
// antd
import { Menu } from 'antd'

const Header = ({ menuItems }) => {
  return (
    <Menu
      mode="horizontal"
      theme="dark"
    >
      {menuItems}
    </Menu>
  )
}

export default Header