export const sieveOfEratosthenes = (arr) => {
  if(Array.isArray(arr)) {
    return arr.filter( el => ifPrime(el) )
  }
  return null
};

const ifPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false;
  return num !== 1 && num !== 0;
}
