function sales(carsSold) {
  const totals = {};
  carsSold.forEach((carSale) => {
    if (totals[carSale.make]) {
      totals[carSale.make] += carSale.price;
    } else {
      totals[carSale.make] = carSale.price;
    }
  });
  return totals;
}

module.exports = sales;
