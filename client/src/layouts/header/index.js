// react
import React from 'react'
// antd
import { Menu } from 'antd'

const Header = ({
  content,
  currentItem,
  setCurrentItem,
}) => {
  return (
    <Menu
      mode="horizontal"
      theme="dark"
      defaultSelectedKeys={[currentItem]}
      onClick={e => setCurrentItem(e.key)}
    >
      {content}
    </Menu>
  )
}

export default Header