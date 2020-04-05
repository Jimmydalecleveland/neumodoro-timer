import React from 'react'
import * as Styled from './Layout.styles'

const Header = () => {
  const handleClose = () => {
    remote.app.quit()
  }

  return (
    <Styled.Header><span onClick={handleClose}>X</span></Styled.Header>
  )
}

export default Header
