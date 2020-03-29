import {
  FIVE_MINUTES_IN_SECONDS,
  TWENTY_FIVE_MINUTES_IN_SECONDS,
} from './utils'

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
    case 'SWITCH_MODE': {
      return { ...state, mode: action.payload }
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

export default reducer
