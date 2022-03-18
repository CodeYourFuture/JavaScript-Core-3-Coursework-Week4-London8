function sales(carsSold) {
  let totals = {};
  for (object of carsSold) {
    if (totals[object.make]) {
      totals[object.make] += object.price;
    } else {
      totals[object.make] = object.price;
    }
  }
  return totals;
}

module.exports = sales;
