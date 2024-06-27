export const input = "DDADSADASDAAADS";

export function FindUnique(str) {
  let uniChar = [...new Set(str)].join("");
  return uniChar;
}
