// react
import React from 'react'
// antd
import { Menu, Col } from 'antd'
// components
import { LoginForm, RegisterForm } from '../components/forms'

const { Item } = Menu

export const generateHeaderContent = ({ leftSide, rightSide }) => {

  if (leftSide) {
    return leftSide.map(({ label }) => (
      <Item key={label.toLowerCase()}>
        {label}
      </Item>
    ))
  }
}

export const generateMainContent = ({ contentType }) => {
  switch (contentType) {
    case 'login':
      return (
        <Col span={8} offset={8}>
          <LoginForm />
        </Col>
      )
    
    case 'register':
      return (
        <Col span={8} offset={8}>
          <RegisterForm />
        </Col>
      )
  }
}