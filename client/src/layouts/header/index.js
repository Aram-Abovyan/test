// react
import React from 'react'
// antd
import { Layout } from 'antd'
import { Menu } from 'antd'
// uuid
import { v4 as uuidv4 } from 'uuid'

const Header = ({ menuItems }) => {
  return (
    <Layout.Header>
      <Menu
        mode="horizontal"
        theme="dark"
        onClick={() => alert('menu')}
      >
        {menuItems.map(menuItem => (
          <Menu.Item key={uuidv4()}>{menuItem}</Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  )
}

export default Header