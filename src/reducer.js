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
      return { ...state, areAlertsOn: !state.areAlertsOn }
    }
    case 'TOGGLE_SOUNDS': {
      return { ...state, areSoundsOn: !state.areSoundsOn }
    }
    case 'SWITCH_MODE': {
      return { ...state, mode: action.payload }
    }
    case 'DECREMENT_TIMER': {
      return { ...state, time: state.time - 1 }
    }
    case 'TOGGLE_TIMER_ACTIVE': {
      let { isPomoActive, isTimerActive, pomo } = state
      isTimerActive = !isTimerActive

      if (state.mode === 'Pomodoro') {
        if (!isPomoActive) {
          pomo = pomo >= 4 ? 1 : pomo + 1
          isPomoActive = true
        }
      }

      return {
        ...state,
        isTimerActive,
        isPomoActive,
        pomo,
      }
    }
    case 'UPDATE_TIME': {
      return { ...state, time: action.payload }
    }
    case 'PREP_POMO': {
      return {
        ...state,
        isTimerActive: false,
        mode: 'Pomodoro',
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
      }
    }
    case 'PREP_SHORT_BREAK': {
      return {
        ...state,
        pomo: state.pomo > 0 ? state.pomo - 1 : 0,
        isPomoActive: false,
        isTimerActive: false,
        mode: 'Short Break',
        time: FIVE_MINUTES_IN_SECONDS,
      }
    }
    case 'AUTO_START_SHORT_BREAK': {
      return {
        ...state,
        isPomoActive: false,
        mode: 'Short Break',
        time: FIVE_MINUTES_IN_SECONDS,
      }
    }
    case 'PREP_LONG_BREAK': {
      return {
        ...state,
        pomo: state.pomo > 0 ? state.pomo - 1 : 0,
        isTimerActive: false,
        isPomoActive: false,
        mode: 'Long Break',
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
      }
    }
    case 'AUTO_START_LONG_BREAK': {
      return {
        ...state,
        isPomoActive: false,
        mode: 'Long Break',
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
      }
    }
    case 'END_BREAK': {
      const wasLongBreak = state.pomo === 4

      return {
        ...state,
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
        isTimerActive: false,
        pomo: wasLongBreak ? 0 : state.pomo,
        mode: 'Pomodoro',
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
