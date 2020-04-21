const formatDate = (date: Date): string => {
  if (date) {
    const tmpDate = date.toLocaleString();
    return `${tmpDate.substr(8, 2)}/${tmpDate.substr(5, 2)}/${tmpDate.substr(
      0,
      4,
    )}`;
  }
  return '';
};

export default formatDate;
