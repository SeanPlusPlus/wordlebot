import uniq from 'lodash/uniq';
import { log } from '../utils/logger'

export const getGrid = () => (
  Array(6).fill().map((x,i) => ( 
    Array(5).fill().map((x,i) => null)
  ))
)

export const getRows = (payload, state) => {
  let found = false;
  var rows = getGrid();
  for (var i = 0; i < state.length; i++) {
    for (var j = 0; j < state[i].length; j++) {
      if (state[i][j] === null && found === false) {
        found = true;
        rows[i][j] = payload;
      } else {
        rows[i][j] = state[i][j];
      }
    }
  }
  return rows;
}

export const parseGrid = (grid, status, payload, new_row) => {

  let coordinates;
  if (payload) {
    coordinates = `${payload.row}:${payload.col}`;
    status[coordinates] = payload.status;
  } else {
    for (var i = 0; i < 5; i++) {
      status[`${new_row}:${i}`] = null;
    }
  }
 
  const { rows } = grid;

  const keys = Object.keys(status);

  // add characters in gray here
  var not_present = [];

  // add characters in green / yellow here
  // if green, set pos to true
  // if yellow, set pos to false
  var present = [
    {
      char: '',
      pos: null,
    },
    {
      char: '',
      pos: null,
    },
    {
      char: '',
      pos: null,
    },
    {
      char: '',
      pos: null,
    },
    {
      char: '',
      pos: null,
    },
  ];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var coord = key.split(':').map((el) => parseInt(el, 10));
    var row = coord[0];
    var col = coord[1];
    var char = rows[row][col];

    if (status[key] === 'valid') {
      present[col] = {char, pos: true}
    } else if (status[key] === 'exists') {
      present[col] = {char, pos: false}
    } else {
      not_present.push(char);
    }
  }

  // remove duplicates from our present array
  var s = new Set()
  for (var i = 0; i < present.length; i++) {
    if (!s.has(present[i].char)) {
      s.add(present[i].char);
    }
  }

  // remove any items from not_present that we know are present
  s.forEach((el) => {
    not_present = not_present.filter((item) => (item !== el));
  })
  not_present = uniq(not_present);

  // log('NOT_PRESENT', 'yellow', not_present);
  // log('PRESENT', 'blue', present);
  return ({ not_present, present });
}
