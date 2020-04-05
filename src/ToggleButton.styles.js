import styled from 'styled-components'

export const ToggleWrapper = styled.button`
  all: unset;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  outline: none;
`

export const Toggle = styled.div`
  background: #e6eef7;
  box-shadow: 5px 5px 10px #c1c9d2, -5px -5px 10px #ffffff;
  border-radius: 20px;

  height: 70px;
  width: 70px;

  &.active {
    border: solid 3px #fcfeff;
    filter: blur(1px);
    box-shadow: 1px 1px 2px #c1c9d2, inset 5px 5px 10px #c1c9d2,
      inset -5px -5px 10px #ffffff;
  }
`
