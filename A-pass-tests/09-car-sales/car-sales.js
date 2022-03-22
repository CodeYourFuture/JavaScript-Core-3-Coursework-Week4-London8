function sales(carsSold) {
  let total = {};
  carsSold.forEach((el) => {
    if (el.make !== total[el.make]) {
      total[el.make] = 0;
    }
  });
  carsSold.forEach((el) => (total[el.make] += el.price));
  return total;
}

module.exports = sales;
