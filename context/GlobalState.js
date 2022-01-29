import React, {
  createContext,
  useReducer,
  useEffect,
} from 'react';
import AppReducer from './AppReducer';
import { log } from '../utils/logger'
import { getGrid } from '../utils/grid'

const initialState = {
  grid: {
    rows: getGrid(),
    status: {},
  },
  words: [],
  filtered: [],
  solved: false,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state
  function setGrid(data) {
    dispatch({
      type: 'UPDATE_GRID',
      payload: data 
    });
  }

  function setSquare(data) {
    dispatch({
      type: 'UPDATE_GRID_SQUARE',
      payload: data 
    });
  }

  function setWords(data) {
    dispatch({
      type: 'INIT_WORDS',
      payload: data 
    });
  }

  function setSolved(data) {
    dispatch({
      type: 'SET_SOLVED',
      payload: data 
    });
  }

  useEffect(() => {
    log('state', 'green', state);
  }, [state])

  return ( <GlobalContext.Provider value = {
      {
        grid: state.grid,
        words: state.words,
        filtered: state.filtered,
        solved: state.solved, 
        setGrid,
        setSquare,
        setWords,
        setSolved,
      }
    } > {
      children
    } </GlobalContext.Provider>
  )
}