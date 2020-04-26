import React, { useReducer, useRef } from 'react'
const { app } = window.require('electron').remote;

import { TWENTY_FIVE_MINUTES_IN_SECONDS } from './utils'
import reducer, * as actions from './reducer'
import useInterval from './useInterval'
import Tomato from './Tomato'
import ToggleButton from './ToggleButton'
import PlayIcon from './PlayIcon'
import NotificationIcon from './NotificationIcon'
import SoundOnIcon from './SoundOnIcon'
import * as Styled from './Layout.styles'
import alertLong from './assets/long-electric-piano-organ.mp3'
import alertShort from './assets/short-jazz-organ-note.mp3'

const initialState = {
  time: TWENTY_FIVE_MINUTES_IN_SECONDS,
  pomo: 1,
  showCurrentExo: true,
  isTimerActive: false,
  areAlertsOn: true,
  areSoundsOn: true,
  mode: 'Pomodoro',
}

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

  const audioAlertLong = new Audio(alertLong)
  const audioAlertShort = new Audio(alertShort)
  audioAlertLong.volume = 0.8
  audioAlertShort.volume = 0.8

  const displayTime = () => {
    let minutes = Math.floor(time / 60).toString()
    let seconds = Math.floor(time % 60).toString()

    // Update taskbar icon badge with current minute
    if (seconds === '59' || seconds == '0') {
      const badgeText = minutes === '0' ? '<1m' : `${minutes}m`
      if (app.dock) {
        app.dock.setBadge(badgeText)
      }
    }

    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`

    return `${minutes}:${seconds}`
  }

  const playNotificationSound = (sound) => {
    if (areSoundsOn) {
      sound.play()
    }
  }

  const sendNotification = (title, body) => {
    if (areAlertsOn) {
      // TODO: is there a way to store this one time and call .show()
      // on it with updated messages?
      const notification = new Notification(title, {
        silent: true,
        body,
      })
    }
  }

  useInterval(
    (intervalId) => {
      if (time <= 0) {
        if (mode === 'Pomodoro') {
          playNotificationSound(audioAlertLong)
          if (pomo === 4) {
            sendNotification(
              'Time is up!',
              'You completed a tomato set! ♪(^∇^*) Take a 25 minute break.'
            )
            dispatch({ type: actions.AUTO_START_LONG_BREAK })
          } else {
            sendNotification('Time is up!', 'Take a 5 minute break.')
            dispatch({ type: actions.AUTO_START_SHORT_BREAK })
          }
        } else {
          // Break is over
          playNotificationSound(audioAlertShort)
          if (pomo === 4) {
            sendNotification('I hope you had a nice rest. o(*￣︶￣*)o')
          } else {
            sendNotification("Break's over!", 'Back to work! (╯▔皿▔)╯')
          }
          dispatch({ type: actions.END_BREAK })
          clearInterval(intervalId)
        }
      } else {
        dispatch({ type: actions.DECREMENT_TIMER })
      }
    },
    isTimerActive ? 1000 : null
  )

  const currentSeeds = () => {
    const startingSeedsForCurrentPomo = 20 - (pomo - 1) * 5
    if (mode === 'Pomodoro') {
      const seeds = Math.ceil(time / 60 / 5)

      return startingSeedsForCurrentPomo - (5 - seeds)
    }
    return startingSeedsForCurrentPomo - 5
  }

  const getSwitchPosition = () => {
    const switchWidth = 105

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
            Pomo
            <br />
            doro
          </Styled.SwitchText>
          <Styled.SwitchText
            onClick={() => dispatch({ type: actions.PREP_SHORT_BREAK })}
          >
            Short
            <br />
            Break
          </Styled.SwitchText>
          <Styled.SwitchText
            onClick={() => dispatch({ type: actions.PREP_LONG_BREAK })}
          >
            Long
            <br />
            Break
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
          style={{ width: '80%' }}
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
