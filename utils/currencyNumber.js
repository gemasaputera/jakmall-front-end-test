export const currencyFormat = (number) => {
  const formatNumbering = new Intl.NumberFormat();
  return formatNumbering.format(number);
};
