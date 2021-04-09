const numbersOnlyRegExp = new RegExp(/^[0-9]*$/);

export const isEmpty = (string) => {
  if (string === "") return true;
  return false;
};

export const isNumbersOnly = (string) => {
  if (numbersOnlyRegExp.test(parseInt(string))) return true;
  return false;
};

export const checkMinMaxLength = (string, { min, max }) => {
  if (string.length >= min && string.length <= max) return true;
  return false;
};

export const checkExactLength = (string, length) => {
  if (string.length === length) return true;
  return false;
};
