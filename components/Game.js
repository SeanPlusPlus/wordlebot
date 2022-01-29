import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { parseGrid } from '../utils/grid.js';
import { filterWords } from '../utils/words.js';

const getSquareStatus = (s) => {
  if (!s) {
    return 'valid';
  }

  if (s === 'valid') {
    return 'exists'
  }

  return null
}

const getChar = (el) => {
  if (el) {
    return el.toUpperCase()
  }

  return null
}

export const Game = () => {
  const {
    grid: {
      rows,
      status,
    },
    setSquare,
  } = useContext(GlobalContext);

  const getBackground = (i, idx) => {
    const char = rows[i][idx];
    
    if (!char) {
      return ''
    }

    const key = `${i}:${idx}`;

    if (status && status[key]) {
      const color = status[key] === 'exists' ? 'yellow' : 'green';
      const bg = `${color}`;
      return bg;
    }
   
    return '' 
  }

  const handleClick = (i, idx) => {
    const char = rows[i][idx];
    if (!char) {
      return
    }

    const word = rows[i].join('');
    const key = `${i}:${idx}`;
    const sqStatus = getSquareStatus(status[key]);
 
    if (char) {
      setSquare({
        word,
        char,
        row: i,
        col: idx,
        status: sqStatus,
       });
    }
  }

  return (
    rows.map((row, i) => (
      <div key={i} className="grid grid-cols-5 p-2 gap-2">
        {row.map((el, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(i, idx)}
            className={`hover:cursor-pointer text-2xl border border-black-500 rounded p-3 h-14 w-12 align-middle ${getBackground(i, idx)}`}
          >
            {getChar(rows[i][idx])}
          </div>
        ))}
      </div>
    ))
  )
}
