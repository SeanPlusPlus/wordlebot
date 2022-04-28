import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import _keys from 'lodash/keys'

const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    // console.log('Copying to clipboard was successful!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}

const getNumberOfDays = (start, end) => {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

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
  const [ modal, setModal ] = useState('')

  const {
    grid: {
      rows,
      status,
    },
    setSquare,
    solved,
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
    if (solved) {
      return
    }

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

  const handleCopy = () => {
    const keys = _keys(status)
    const squares = 5
    const lines = (keys.length / squares)
    const green = '🟩'
    const yellow = '🟨'
    const black = '⬛️'
    const genesis = '2022-04-28'
    const n = getNumberOfDays(genesis, new Date()) + 312
    const str = `Wordle ${n} ${lines}/6\n\n`
    for (var i = 0; i < lines; i++) {
      for (var j = 0; j < squares; j++) {
        var k = i + ':' + j
        if (status[k] === 'valid') {
          str += green
        } else if (status[k] === 'exists') {
          str += yellow
        } else {
          str += black 
        }
      }
      str += '\n'
    }
    copyTextToClipboard(str);
    setModal('modal-open')
  }

  const handleClose = () => {
    setModal('')
  }

  return (
    <>
      {rows.map((row, i) => (
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
      ))}
      {solved && (
        <div className="btn mt-3" onClick={() => handleCopy(true)}>
          Copy results to the clipboard
        </div>
      )}



      <div className={`modal ${modal}`}>
        <div className="modal-box">
          <h3 className="font-bold text-xl flex">
            <span className="ml-1 text-xl mb-4">
              Success
            </span>
          </h3>
          <p className="pt-4">
            Results copied to clipboard
          </p>
          <div className="modal-action pt-5">
            <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
          </div>
        </div>
      </div>

    </>
  )
}
