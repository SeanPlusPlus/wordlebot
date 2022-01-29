export const isSolved = (status) => {
  const keys = Object.keys(status);
  const valid = keys
    .sort()
    .reverse()
    .slice(0, 5)
    .map((el) => status[el])
    .every((el) => (el === 'valid'));

  return valid;
}