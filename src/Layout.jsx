import React, { useReducer, useRef } from 'react'

import reducer, * as actions from './reducer'
import useInterval from './useInterval'
import Tomato from './Tomato'
import ToggleButton from './ToggleButton'
import PlayIcon from './PlayIcon'
import NotificationIcon from './NotificationIcon'
import SoundOnIcon from './SoundOnIcon'
import * as Styled from './Layout.styles'
import { TWENTY_FIVE_MINUTES_IN_SECONDS } from './utils'

const initialState = {
  time: TWENTY_FIVE_MINUTES_IN_SECONDS,
  pomo: 1,
  showCurrentExo: true,
  isTimerActive: false,
  areAlertsOn: true,
  areSoundsOn: true,
  mode: 'Pomodoro',
}

// Higher contrast
// const colorVariants = {
//   Pomodoro: {
//     backgroundColor: '#ff6138',
//   },
//   'Short Break': {
//     backgroundColor: '#06c7f3',
//   },
//   'Long Break': {
//     backgroundColor: '#06c7f3',
//   },
// }

const colorVariants = {
  Pomodoro: {
    backgroundColor: '#ffcec0',
  },
  'Short Break': {
    backgroundColor: '#cedefa',
  },
  'Long Break': {
    backgroundColor: '#d1d7f8',
  },
}

const Layout = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    time,
    mode,
    pomo,
    showCurrentExo,
    isTimerActive,
    areAlertsOn,
    areSoundsOn,
  } = state
  const modeSwitchConstraintsRef = useRef(null)

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
        if (mode === 'Pomodoro') {
          if (pomo === 4) {
            sendNotification(
              'Time is up!',
              'You completed a tomato set (≧∇≦)ﾉ. Take a 25 minute break.'
            )
            dispatch({ type: actions.AUTO_START_LONG_BREAK })
          } else {
            sendNotification('Time is up!', 'Will you take a 5?!?! (￣﹃￣)')
            dispatch({ type: actions.AUTO_START_SHORT_BREAK })
          }
        } else {
          // Break is over
          if (pomo === 4) {
            sendNotification('Start a new tomato?')
          } else {
            sendNotification('Back to work! (╯▔皿▔)╯')
          }
          dispatch({ type: actions.END_BREAK })
          clearInterval(intervalId)
        }
      } else {
        dispatch({ type: actions.DECREMENT_TIMER })
      }
    },
    isTimerActive ? 20 : null
  )

  const currentSeeds = () => {
    // const seedsBehindQuarters = 20 - pomo * 5
    // // If in the middle of a pomodoro, use time to calculate
    // // how many seeds to show
    // if (showCurrentExo) {
    //   const minutes = Math.ceil(time / 60)
    //   console.log(seedsBehindQuarters + Math.ceil(minutes / 5))
    //   return seedsBehindQuarters + Math.ceil(minutes / 5)
    // }

    // return seedsBehindQuarters

    // return Math.ceil(
    //   ((pomo + 1) * TWENTY_FIVE_MINUTES_IN_SECONDS + time) / 60 / 5
    // )

    const startingSeedsForCurrentPomo = 20 - (pomo - 1) * 5
    if (mode === 'Pomodoro') {
      const seeds = Math.ceil(time / 60 / 5)

      return startingSeedsForCurrentPomo - (5 - seeds)
    }
    return startingSeedsForCurrentPomo - 5
  }

  const getSwitchPosition = () => {
    const switchWidth = 120

    if (mode === 'Pomodoro') {
      return 0
    }
    if (mode === 'Short Break') {
      return modeSwitchConstraintsRef.current.clientWidth / 2 - switchWidth / 2
    }
    return modeSwitchConstraintsRef.current.clientWidth - switchWidth
  }

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h1>Neumodoro Timer</h1>

        <Styled.SwitchWrapper
          ref={modeSwitchConstraintsRef}
          animate={mode}
          variants={colorVariants}
          transition={{ duration: 0.6 }}
        >
          <Styled.SwitchText
            onClick={() => dispatch({ type: actions.PREP_POMO })}
          >
            Pomodoro
          </Styled.SwitchText>
          <Styled.SwitchText
            onClick={() => dispatch({ type: actions.PREP_SHORT_BREAK })}
          >
            Short Break
          </Styled.SwitchText>
          <Styled.SwitchText
            onClick={() => dispatch({ type: actions.PREP_LONG_BREAK })}
          >
            Long Break
          </Styled.SwitchText>
          <Styled.Switch
            animate={{
              x: getSwitchPosition(),
            }}
            transition={{
              type: 'spring',
              mass: '0.2',
              damping: '6.3',
            }}
            // drag="x"
            // dragConstraints={modeSwitchConstraintsRef}
          >
            {mode}
          </Styled.Switch>
        </Styled.SwitchWrapper>

        <Tomato
          style={{ width: '70%' }}
          pomo={pomo}
          showCurrentExo={showCurrentExo}
          seeds={currentSeeds()}
          setQuadrant={dispatch}
        />

        <Styled.TimeWrapper>
          <Styled.Time>{displayTime()}</Styled.Time>
          <Styled.TimeAfterImage>88:88</Styled.TimeAfterImage>
        </Styled.TimeWrapper>

        <Styled.NavWrapper>
          <ToggleButton
            isActive={isTimerActive}
            setActive={() => dispatch({ type: actions.TOGGLE_TIMER_ACTIVE })}
          >
            <PlayIcon isActive={isTimerActive} />
          </ToggleButton>

          <ToggleButton
            isActive={areAlertsOn}
            setActive={() => dispatch({ type: actions.TOGGLE_ALERTS })}
          >
            <NotificationIcon isActive={areAlertsOn} />
          </ToggleButton>

          <ToggleButton
            isActive={areSoundsOn}
            setActive={() => dispatch({ type: actions.TOGGLE_SOUNDS })}
          >
            <SoundOnIcon isActive={areSoundsOn} />
          </ToggleButton>
        </Styled.NavWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Layout
