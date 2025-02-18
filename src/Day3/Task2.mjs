export const input = {
  numArr: [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4],
  wordArr: ["one", "two", "three"],
};

export function sortAndJoin(numArr, wordArr) {
  BubbleSort(numArr);
  return [...numArr, ...wordArr];
}

function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
