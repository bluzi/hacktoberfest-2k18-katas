export const nextPowerOfTwo = (a) => {
  if (a <= 0) return 0;

  let val = 0;
  let i = 0;
  
	do {
		val = Math.pow(2, i);
		i++;
  } while(val < a)
  
  return val;
};