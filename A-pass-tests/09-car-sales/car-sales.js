function sales(carsSold) {
  let total = {};
  for (let car of carsSold) {
    if (total[car.make]) {
      total[car.make] += +car.price;
    } else {
      total[car.make] = car.price;
    }
  }
  return total;
}

module.exports = sales;
