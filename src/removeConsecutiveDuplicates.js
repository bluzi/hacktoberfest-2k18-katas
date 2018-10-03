export const removeConsecutiveDuplicates = (array) => {

  let result = array.filter((element, index, array) => {
    if (index === 0) { return true; }
    return element != array[index - 1];
  });

  return result;
};