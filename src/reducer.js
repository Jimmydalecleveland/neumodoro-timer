import {
  FIVE_MINUTES_IN_SECONDS,
  TWENTY_FIVE_MINUTES_IN_SECONDS,
} from './utils'

export const TOGGLE_ALERTS = 'TOGGLE_ALERTS'
export const TOGGLE_SOUNDS = 'TOGGLE_SOUNDS'
export const SWITCH_MODE = 'SWITCH_MODE'
export const DECREMENT_TIMER = 'DECREMENT_TIMER'
export const TOGGLE_TIMER_ACTIVE = 'TOGGLE_TIMER_ACTIVE'
export const UPDATE_TIME = 'UPDATE_TIME'
export const PREP_POMO = 'PREP_POMO'
export const PREP_SHORT_BREAK = 'PREP_SHORT_BREAK'
export const AUTO_START_SHORT_BREAK = 'AUTO_START_SHORT_BREAK'
export const PREP_LONG_BREAK = 'PREP_LONG_BREAK'
export const AUTO_START_LONG_BREAK = 'AUTO_START_LONG_BREAK'
export const END_BREAK = 'END_BREAK'

/**
 * Reducer function to be used with useReducer for all pomodoro state
 * @param {Object} state - State object
 * @param {Object} action
 * @property {string} type - Action to run switch against
 * @property {any} [payload] - Any additional information needed to update state
 */
function reducer(state, action) {
  if (action.type !== DECREMENT_TIMER) {
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
    case TOGGLE_ALERTS: {
      return { ...state, areAlertsOn: !state.areAlertsOn }
    }
    case TOGGLE_SOUNDS: {
      return { ...state, areSoundsOn: !state.areSoundsOn }
    }
    case SWITCH_MODE: {
      return { ...state, mode: action.payload }
    }
    case DECREMENT_TIMER: {
      return { ...state, time: state.time - 1 }
    }
    case TOGGLE_TIMER_ACTIVE: {
      let { showCurrentExo, isTimerActive } = state
      isTimerActive = !isTimerActive

      if (state.mode === 'Pomodoro') {
        showCurrentExo = false
      }

      return {
        ...state,
        isTimerActive,
        showCurrentExo,
      }
    }
    case UPDATE_TIME: {
      return { ...state, time: action.payload }
    }
    case PREP_POMO: {
      return {
        ...state,
        pomo: action.payload || state.pomo,
        isTimerActive: false,
        showCurrentExo: true,
        mode: 'Pomodoro',
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
      }
    }
    case PREP_SHORT_BREAK: {
      return {
        ...state,
        isTimerActive: false,
        showCurrentExo: false,
        mode: 'Short Break',
        time: FIVE_MINUTES_IN_SECONDS,
      }
    }
    case AUTO_START_SHORT_BREAK: {
      return {
        ...state,
        showCurrentExo: false,
        mode: 'Short Break',
        time: FIVE_MINUTES_IN_SECONDS,
      }
    }
    case PREP_LONG_BREAK: {
      return {
        ...state,
        pomo: 4,
        showCurrentExo: false,
        isTimerActive: false,
        mode: 'Long Break',
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
      }
    }
    case AUTO_START_LONG_BREAK: {
      return {
        ...state,
        showCurrentExo: false,
        mode: 'Long Break',
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
      }
    }
    case END_BREAK: {
      let { pomo } = state

      if (
        state.mode === 'Long Break' ||
        (state.mode === 'Short Break' && pomo === 4)
      ) {
        pomo = 1
      } else {
        pomo += 1
      }

      return {
        ...state,
        pomo,
        mode: 'Pomodoro',
        showCurrentExo: true,
        isTimerActive: false,
        time: TWENTY_FIVE_MINUTES_IN_SECONDS,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
