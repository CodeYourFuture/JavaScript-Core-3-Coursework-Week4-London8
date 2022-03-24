function sales(carsSold) {
  let objCar = {};
  Array.from(
    carsSold.reduce(
      (m, { make, price }) => m.set(make, (m.get(make) || 0) + price),
      new Map()
    ),
    ([make, price]) => ({ make, price })
  ).map((item) => (objCar[item.make] = item.price));
  return objCar;
}

module.exports = sales;
