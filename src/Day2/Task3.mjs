export const input = {
  month: Math.floor(Math.random() * 12 + 1),
  year: Math.floor(Math.random() * (2100 - 1900 + 1) + 1900),
};

const SEASONS = {
  0: "Winter",
  1: "Spring",
  2: "Summer",
  3: "Autumn",
  4: "Winter",
};

export function whatIsTime(month, year) {
  return {
    season: SEASONS[Math.floor(month / 3)],
    year:
      year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
        ? "leap"
        : "non-leap",
  };
}
