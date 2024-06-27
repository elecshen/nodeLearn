export const input = 200;

export function FindFib(max) {
  let fibArr = [0, 1];

  for (let i = 1; fibArr[i] < max; i++) {
    fibArr.push(fibArr[i] + fibArr[i - 1]);
  }
  fibArr.pop();
  return fibArr;
}
