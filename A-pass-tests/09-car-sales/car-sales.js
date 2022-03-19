function sales(carsSold) {
  let fordTotal = 0;
  let hondaTotal = 0;
  let landRoverTotal = 0;
  let toyotaTotal = 0;

  carsSold.filter((car) => {
    if (car.make == "Ford") {
      fordTotal += car.price;
    } else if (car.make == "Honda") {
      hondaTotal += car.price;
    } else if (car.make == "Land Rover") {
      landRoverTotal += car.price;
    } else if (car.make == "Toyota") {
      toyotaTotal += car.price;
    }
  });

  let totals = {};
  totals.Ford = fordTotal;
  totals.Honda = hondaTotal;
  totals["Land Rover"] = landRoverTotal;
  totals.Toyota = toyotaTotal;

  return totals;
}

module.exports = sales;
