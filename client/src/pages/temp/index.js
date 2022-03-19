// react
import React from 'react'
import Header from '../../layouts/header'
import { Button } from 'antd'

const Test = () => {
  const menuItems = [
    <Button type="text">one</Button>,
    <Button type="text">two</Button>,
  ]
  return (
    <Header
      menuItems={menuItems}
    />
  )
}

export default Test