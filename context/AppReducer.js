import { log } from '../utils/logger'
import { getRows } from '../utils/grid'
import { filterWords } from '../utils/words'
import { parseGrid } from '../utils/grid'
import { isSolved } from '../utils/solved'

export default (state, action) => {
  log('prev state', 'gray', state);
  log('action', 'red', action);
  switch (action.type) {
    case 'UPDATE_GRID':
      return {
        ...state,
        grid: {
          ...state.grid,
          rows: getRows(action.payload, state.grid.rows)
        },
      }
    case 'UPDATE_GRID_SQUARE':
      return {
        ...state,
        grid: {
          ...state.grid,
          status: {
            ...state.grid.status,
            [`${action.payload.row}:${action.payload.col}`]: action.payload.status
          }
        },
        filtered: filterWords(state.words, parseGrid(state.grid, state.grid.status, action.payload)),
      }
    case 'INIT_WORDS':
      return {
        ...state,
        words: action.payload,
        filtered: filterWords(action.payload, parseGrid(state.grid, state.grid.status, null, 0)),
      }
    case 'SET_SOLVED':
      return {
        ...state,
        solved: isSolved(state.grid.status)
      }
    default:
      return state;
  }
}