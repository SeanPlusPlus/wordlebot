import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { rand } from '../utils/rand'
import { candidate } from '../utils/candidate'

const starting = [
  'slate',
  'sauce',
  'slice',
  'shale',
  'saute',
  'share',
  'sooty',
  'shine',
  'suite',
  'crane',
]

export const Controls = () => {
  const [started, setStarted] = useState(false);
  const [disabled, setDisabled] = useState(true);
 
  const {
    grid: { rows },
    filtered,
    setGrid,
    setWords,
    setSquare,
    solved,
  } = useContext(GlobalContext);

  useEffect(() => {
    setDisabled(filtered.length === 0);
  }, [filtered, solved]);

  async function fetchWords() {
    await fetch(`/words.txt`)
      .then(response => response.text())
      .then(response => {
        var words = response.split('\n');
        setWords(words);
      });
    }
 
  const handleInit = () => {
    setStarted(true);
    fetchWords();
    var word = rand(starting);
    word.split('').forEach((char) => {
      setGrid(char);
    });
  }

  const handleNext = () => {
    var selected = rows.map((row) => (
      row ? row.join('') : null
    )).filter((el) => (el.length));
    var word = candidate(filtered, selected);
    var row = 0;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i][0]) {
        row += 1;
      }
    }
    word.split('').forEach((char, idx) => {
      setGrid(char);
      setSquare({
        word,
        char,
        row,
        col: idx,
        status: null,
        auto: true,
       });
    });
  }
 
  return (
    <div className="pb-3">
      {solved && (
        <button
          className="btn btn-info pointer-events-none"
          role="button"
          aria-pressed="true"
        >
          <span className="pr-1">
            <span role="img" aria-label="party">🎉</span>
          </span>
            Woooooohooooooooooo
          <span className="pl-1">
            <span role="img" aria-label="party">🎉</span>
          </span>
        </button>
      )}
      {!started && !solved && (
        <button
          className="btn btn-primary btn-active"
          role="button"
          aria-pressed="true"
          onClick={handleInit}
        >
          START
        </button>
      )}
      {started && !solved && (
        <button
          className="btn btn-primary btn-active"
          role="button"
          aria-pressed="true"
          onClick={handleNext}
          disabled={disabled}
        >
          NEXT
        </button>
      )}
    </div>
  )
}