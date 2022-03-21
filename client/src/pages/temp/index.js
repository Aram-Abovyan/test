// react
import React from 'react'
// custom
import Header from '../../layouts/header'
import Main from '../../layouts/main'
// antd
import { Menu } from 'antd'
import { Layout } from 'antd'
// uuid
import { v4 as uuidv4 } from 'uuid'

const Test = () => {
  const menuItems = [
    <Menu.Item
      key={uuidv4()}
      onClick={() => alert('one')}
    >
      one
    </Menu.Item>,
    <Menu.Item
      key={uuidv4()}
      onClick={() => alert('two')}
    >
      two
    </Menu.Item>,
  ]
  return (
    <>
      <Header
        menuItems={menuItems}
      />
      <Main />
    </>
    
    
  )
}

export default Test