import React, { useReducer, useRef } from 'react'

import reducer from './reducer'
import useInterval from './useInterval'
import Tomato from './Tomato'
import * as Styled from './Layout.styles'
import { TWENTY_FIVE_MINUTES_IN_SECONDS } from './utils'

const initialState = {
  time: TWENTY_FIVE_MINUTES_IN_SECONDS,
  pomo: 0,
  isPomoActive: false,
  isTimerActive: false,
  areAlertsOn: true,
  mode: 'Pomodoro',
}

const colorVariants = {
  Pomodoro: {
    backgroundColor: '#ff6138',
  },
  'Short Break': {
    backgroundColor: '#06c7f3',
  },
}

const Layout = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { time, mode, pomo, isPomoActive, isTimerActive, areAlertsOn } = state
  const modeSwitchConstraintsRef = useRef(null)
  console.log(modeSwitchConstraintsRef)

  if (modeSwitchConstraintsRef.current) {
    console.log('GOT CURRENT')
    console.log(modeSwitchConstraintsRef.current.clientWidth)
  }

  const displayTime = () => {
    let minutes = Math.floor(time / 60).toString()
    let seconds = Math.floor(time % 60).toString()
    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`
    return `${minutes}:${seconds}`
  }

  const sendNotification = (title, body) => {
    if (areAlertsOn) {
      // TODO: is there a way to store this one time and call .show()
      // on it with updated messages?
      const notification = new Notification(title, {
        silent: false,
        icon: 'icon-location',
        urgency: 'normal',
        body,
      })
    }
  }

  useInterval(
    (intervalId) => {
      if (time <= 0) {
        if (isPomoActive) {
          if (pomo === 4) {
            sendNotification(
              'Time is up!',
              'You completed a tomato set (≧∇≦)ﾉ. Take a 25 minute break.'
            )
            dispatch({ type: 'START_LONG_BREAK' })
          } else {
            sendNotification('Time is up!', 'Will you take a 5?!?! (￣﹃￣)')
            dispatch({ type: 'START_SHORT_BREAK' })
          }
        } else {
          // Break is over
          if (pomo === 4) {
            sendNotification('Start a new tomato?')
          } else {
            sendNotification('Back to work! (╯▔皿▔)╯')
          }
          dispatch({ type: 'END_BREAK' })
          clearInterval(intervalId)
        }
      } else {
        dispatch({ type: 'DECREMENT_TIMER' })
      }
    },
    isTimerActive ? 1000 : null
  )

  const currentSeeds = () => {
    const seedsBehindQuarters = 20 - pomo * 5
    // If in the middle of a pomodoro, use time to calculate
    // how many seeds to show
    if (isPomoActive) {
      const minutes = Math.ceil(time / 60)
      console.log(seedsBehindQuarters + Math.ceil(minutes / 5))
      return seedsBehindQuarters + Math.ceil(minutes / 5)
    }
    return seedsBehindQuarters
  }

  const startStopTimer = () => {
    if (!isPomoActive) {
      dispatch({ type: 'START_NEW_POMO' })
    }
    dispatch({ type: 'TOGGLE_TIMER_ACTIVE' })
  }

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h1>Neumodoro Timer</h1>

        <Styled.SwitchWrapper
          ref={modeSwitchConstraintsRef}
          animate={mode}
          variants={colorVariants}
        >
          <Styled.Switch
            animate={{ x: mode === 'Pomodoro' ? 0 : 100 }}
            // drag="x"
            // dragConstraints={modeSwitchConstraintsRef}
          >
            {mode}
          </Styled.Switch>
        </Styled.SwitchWrapper>

        <Tomato
          style={{ width: '70%' }}
          pomo={pomo}
          isPomoActive={isPomoActive}
          seeds={currentSeeds()}
        />

        <Styled.Raised>
          <h4>Time Left: </h4>
          <p>{displayTime()}</p>
          <Styled.CircleButton>
            <span>›</span>
          </Styled.CircleButton>
        </Styled.Raised>
        <Styled.NavWrapper>
          <Styled.Toggle>
            <input type="checkbox" onClick={startStopTimer} />
            <span />
          </Styled.Toggle>
          <Styled.Toggle>
            <input type="checkbox" />
            <span />
          </Styled.Toggle>
          <Styled.Toggle>
            <input
              type="checkbox"
              onClick={() =>
                dispatch({
                  type: 'SWITCH_MODE',
                  payload: mode === 'Pomodoro' ? 'Short Break' : 'Pomodoro',
                })}
            />
            <span />
          </Styled.Toggle>
          <Styled.Toggle>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: 'TOGGLE_ALERTS' })}
            />
            <span />
          </Styled.Toggle>
        </Styled.NavWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Layout
