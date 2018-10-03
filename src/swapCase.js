export const swapCase = (str) => {
  return str.split('').map((c) =>
          c === c.toUpperCase()  ? c.toLowerCase() : c.toUpperCase()
        ).join('')
};