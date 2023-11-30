const CentsToEuro = (number) => {
  const result = parseInt(number) / 100;

  return result.toString();
};

export default CentsToEuro;
