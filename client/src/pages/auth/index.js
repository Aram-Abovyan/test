// react
import React, { useState } from 'react'
// layouts
import { Header, Main } from '../../layouts'
// antd
import { Menu, Col } from 'antd'
// components
import { LoginForm } from '../../components/forms'
// helpers
import { generateHeaderContent, generateMainContent } from '../../helpers/contentGenerator'

const Auth = () => {
  const [ currentItem, setCurrentItem ] = useState('login')

  const headerContent = generateHeaderContent({
    leftSide: [
      {label: 'Login'},
      {label: 'Register'},
    ]
  })

  const mainContent = generateMainContent({contentType: currentItem})

  return (
    <>
      <Header
        content={headerContent}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <Main
        content={mainContent}
      />
    </>
  )
}

export default Auth