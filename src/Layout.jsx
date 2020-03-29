import React, { useEffect, useRef, useReducer } from 'react'
import * as Styled from './Layout.styles'

import Tomato from './Tomato'

const TWENTY_FIVE_MINUTES_IN_SECONDS = 3
// const TWENTY_FIVE_MINUTES_IN_SECONDS = 1500
const FIVE_MINUTES_IN_SECONDS = 300

/**
 * Reducer function to be used with useReducer for all pomodoro state
 * @param {Object} state - State object
 * @param {Object} action
 * @property {string} type - Action to run switch against
 * @property {any} [payload] - Any additional information needed to update state
 */

function reducer(state, action) {
  const { time, pomo, isTimerActive, areAlertsOn } = state
  if (action.type !== 'DECREMENT_TIMER') {
    console.log(
      '%cDispatch Fired',
      'color: tomato; font-weight: bold',
      `
      type: ${action.type}
      payload: ${action.payload}
    `,
      state
    )
  }

  switch (action.type) {
    case 'TOGGLE_ALERTS': {
      return { ...state, areAlertsOn: !areAlertsOn }
    }
    case 'DECREMENT_TIMER': {
      return { ...state, time: time - 1 }
    }
    case 'START_NEW_POMO': {
      const nextPomo = pomo === 4 ? 1 : pomo + 1

      return { ...state, isPomoActive: true, pomo: nextPomo }
    }
    case 'TOGGLE_TIMER_ACTIVE': {
      return { ...state, isTimerActive: !isTimerActive }
    }
    case 'UPDATE_TIME': {
      return { ...state, time: action.payload }
    }
    case 'START_SHORT_BREAK': {
      return { ...state, time: FIVE_MINUTES_IN_SECONDS, isPomoActive: false }
    }
    case 'START_LONG_BREAK': {
      return {
        ...state,
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
        isPomoActive: false,
      }
    }
    case 'END_BREAK': {
      const wasLongBreak = pomo === 4

      return {
        ...state,
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
        isTimerActive: false,
        pomo: wasLongBreak ? 0 : pomo,
      }
    }
    default: {
      return state
    }
  }
}

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick(id) {
      savedCallback.current(id)
    }

    if (delay !== null) {
      const id = setInterval(() => tick(id), delay)
      return () => clearInterval(id)
    }

    return undefined
  }, [delay])
}

const initialState = {
  time: TWENTY_FIVE_MINUTES_IN_SECONDS,
  pomo: 3,
  isPomoActive: false,
  isTimerActive: false,
  areAlertsOn: true,
}

const Layout = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { time, pomo, isPomoActive, isTimerActive, areAlertsOn } = state

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

        <Tomato
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
            <input type="checkbox" />
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
