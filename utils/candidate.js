import uniq from 'lodash/uniq';

const frequency = {
  'e': 12000,
  't': 9000,
  'a': 8000,
  'i': 8000,
  'n': 8000,
  'o': 8000,
  's': 8000,
  'h': 6400,
  'r': 6200,
  'd': 4400,
  'l': 4000,
  'u': 3400,
  'c': 3000,
  'm': 3000,
  'f': 2500,
  'w': 2000,
  'y': 2000,
  'g': 1700,
  'p': 1700,
  'b': 1600,
  'v': 1200,
  'k': 800,
  'q': 500,
  'j': 400,
  'x': 400,
  'z': 200,
}

const getRawScore = (word) => {
  var chars = word.split('');
  var score = 0;
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    score += frequency[char];
  }
  return score
}

export const candidate = (array) => {
  var rank = {}
  
  // get a ranking of each word based on the
  // sum value of the frequency of each char
  // and multiply the sum by number of uniq chars
  array.forEach((word) => {
    var raw_score = parseInt(getRawScore(word), 10);
    var multiplier = uniq(word.split('')).length;
    var score = raw_score * multiplier;
    rank[score] = word;
  })

  // initialize the highest score and word with the best score
  var highest = 0;
  var word = null;

  // iterate over the rankings and update best scored word
  var keys = Object.keys(rank);
  keys.forEach((key) => {
    var num = parseInt(key, 10);
    if (num > highest) {
      highest = num;
      word = rank[key];
    }
  })
 
  return word;
}
