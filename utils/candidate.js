import { rand } from "./rand"

export const candidate = (array) => {
  const word = rand(array);
  console.log(word, array);
  return word;
}