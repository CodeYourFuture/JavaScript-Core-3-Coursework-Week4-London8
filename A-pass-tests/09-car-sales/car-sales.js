function sales(carsSold) {
  return carsSold.reduce((total, car) => {
    total[car.make]
      ? (total[car.make] += car.price)
      : (total[car.make] = car.price);
    return total;
  }, {});
}

module.exports = sales;
