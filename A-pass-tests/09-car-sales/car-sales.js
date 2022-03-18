function sales(carsSold) {
let totalSales = {};
  carsSold.forEach((carSold) => {
    if (totalSales[carSold.make]) {
      totalSales[carSold.make] += carSold.price;
    } else {
      totalSales[carSale.make] = carSold.price;
    }
  });
  return totalSales;}

module.exports = sales;
