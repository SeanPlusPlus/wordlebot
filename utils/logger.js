const DEBUG = true;

export const log = (status, color, data) => {
  if (DEBUG) {
    console.log(`%c ${status}`, `color: ${color}; font-weight:bold;`, data);
  }
}