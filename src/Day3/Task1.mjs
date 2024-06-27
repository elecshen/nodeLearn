export const input = {
  arr: [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5],
  numToFound: 0,
};

export function SortAndFind(arr, num) {
  SelectionSort(arr);
  return { arr, index: BinarySearch(arr, num) };
}

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let iMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[iMin]) iMin = j;
    }
    let tmp = arr[i];
    arr[i] = arr[iMin];
    arr[iMin] = tmp;
  }
  return arr;
}

function BinarySearch(arr, num) {
  let l = 0,
    r = arr.length,
    mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === num) return mid;
    if (num < arr[mid]) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
}
