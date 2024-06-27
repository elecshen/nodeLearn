export const input = "DDADSADASDAAADS";

export function findUnique(str) {
  let uniChar = [...new Set(str)].join("");
  return uniChar;
}
