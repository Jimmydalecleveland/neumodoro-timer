import React from 'react'
import * as Styled from './ToggleButton.styles'

const ToggleButton = ({ active, setActive, children }) => {
  return (
    <Styled.ToggleWrapper onClick={setActive}>
      <Styled.Toggle className={active && 'active'} />
      {children}
    </Styled.ToggleWrapper>
  )
}

export default ToggleButton
