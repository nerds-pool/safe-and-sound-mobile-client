export const isOnlyNumbers = new RegExp(/^[0-9]*$/);

export const checkMinMaxLength = (string, { min, max }) => {
  if (string.length >= min && string.length <= max) return true;
  return false;
};
export const checkExactLength = (string, length) => {
  if (string.length === length) return true;
  return false;
};
