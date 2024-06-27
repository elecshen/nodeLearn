export const input = 100;

export function findPrime(max) {
  max++;
  let isPrimeArr = Array.from({ length: max }, () => true);
  let primes = [];

  for (let i = 2; i < max; i++) {
    if (isPrimeArr[i]) {
      primes.push(i);
      for (let j = i << 1; j < max; j += i) {
        isPrimeArr[j] = false;
      }
    }
  }

  return primes;
}
