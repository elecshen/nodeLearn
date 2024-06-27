export const input = "hello alexandr!";

export function replaceOnFirstLetter(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].repeat(words[i].length);
  }

  return words.join(" ");
}
