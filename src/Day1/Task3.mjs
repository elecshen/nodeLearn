export const input = ["дим", "манек", "рота"];

export function makePalindromeFromArr(arr) {
  let result = [];

  arr.forEach((element) => {
    result.push(element + element.slice(0, -1).split("").reverse().join(""));
  });

  return result;
}
