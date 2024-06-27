export const input = { a: 1, b: 2 };

// Object.entries(obj)
export function toKeyValue(obj) {
  let result = [];
  for (var key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}
