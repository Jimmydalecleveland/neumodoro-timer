import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  -webkit-app-region: drag;
  padding: 35px 20px 20px;

  * {
    -webkit-app-region: no-drag;
  }
`

// TODO: implement custom header
// export const Header = styled.header`
//   -webkit-app-region: drag;
//   padding: 5px 10px;
//   display: flex;
//   width: 100%;
//   height: 30px;
//   justify-content: flex-end;
//   align-items: center;
//   background: #cbd5e1;

//   * {
//     -webkit-app-region: no-drag;
//   }
// `

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 30px;
  background: #eaf2f9;
  width: 360px;
  box-shadow: 5px 5px 30px #c1c9d2;
  border-radius: 20px;
`

export const Raised = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 25px;
  background: #e6eef7;
  box-shadow: 5px 5px 10px #c1c9d2, -5px -5px 10px #ffffff;
  border-radius: 20px;

  h4 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`

export const SwitchWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  margin: 0 0 10px;
  border-radius: 12px;
  background-color: #eaf2f9;
  box-shadow: 1px 1px 2px #fff, inset 5px 5px 10px #aa2f1f,
    inset -5px -5px 10px #ffb6a1;
  box-shadow: 1px 1px 2px #fff, inset 5px 5px 10px rgba(42, 42, 42, 0.5),
    inset -5px -5px 10px rgba(255, 255, 255, 0.5);
  position: relative;
`

export const SwitchText = styled.div`
  flex: 0 0 30%;
  text-align: center;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(46, 46, 46, 0.4);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  cursor: pointer;
`

export const Switch = styled(motion.div)`
  height: 100%;
  width: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  background: #e6eef7;
  border-radius: 12px;
  color: #6e7d9b;
  box-shadow: -1px -1px 1px rgba(201, 211, 221, 0.5),
    5px 5px 10px rgba(111, 129, 149, 0.5),
    -5px -5px 10px rgba(255, 255, 255, 0.5);
  position: absolute;
  cursor: default;

  p {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  width: 100%;
`

export const TimeWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

export const Time = styled.p`
  z-index: 1;
  margin: 0;
  font-size: 54px;
  font-family: 'Digital Clock', sans-serif;
  -webkit-user-select:none;
`

export const TimeAfterImage = styled.p`
  z-index: 0;
  position: absolute;
  margin: 0;
  font-size: 54px;
  font-family: 'Digital Clock', sans-serif;
  color: #d7deeb;
  -webkit-user-select:none;
`
