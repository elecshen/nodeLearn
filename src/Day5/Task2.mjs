export const input = {
  toRevStr: "abcdefg",
  toUCStr: "word word",
};

export class MyString {
  reverse(s) {
    return s.split("").reverse().join("");
  }

  ucFirst(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  ucWords(s) {
    return s
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  }
}
