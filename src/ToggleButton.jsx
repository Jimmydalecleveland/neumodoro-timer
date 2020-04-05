import React from 'react'
import * as Styled from './ToggleButton.styles'

const ToggleButton = ({ isActive, setActive, children }) => {
  return (
    <Styled.ToggleWrapper onClick={setActive}>
      <Styled.Toggle className={isActive && 'active'} />
      {children}
    </Styled.ToggleWrapper>
  )
}

export default ToggleButton
