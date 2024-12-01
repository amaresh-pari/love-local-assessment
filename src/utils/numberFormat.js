const formatToLocaleString = (value) => {
  return value.toLocaleString();
};

const formatToCrore = (number) => {
  const crore = 10000000;
  const formattedNumber = (number / crore).toFixed(1);
  return `${formattedNumber}Cr`;
};

export { formatToLocaleString, formatToCrore };
