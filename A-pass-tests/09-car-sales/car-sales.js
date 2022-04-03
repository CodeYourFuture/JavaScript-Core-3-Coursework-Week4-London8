function sales(carsSold) {
  let totalCarsSold = {};
  carsSold.forEach((car) => {
    let makeOfCar = car.make;
    if (makeOfCar in totalCarsSold) {
      totalCarsSold[makeOfCar] += car.price;
    } else {
      totalCarsSold[makeOfCar] = car.price;
    }
  });
  return totalCarsSold;
}

module.exports = sales;
