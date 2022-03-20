function sales(carsSold) {
  let sumFord = 0;
  let sumHonda = 0;
  let sumLandRover = 0;
  let sumToyota = 0;

  carsSold.forEach((sale) => {
    sale.make === "Ford"
      ? (sumFord += sale.price)
      : sale.make === "Honda"
      ? (sumHonda += sale.price)
      : sale.make === "Land Rover"
      ? (sumLandRover += sale.price)
      : sale.make === "Toyota"
      ? (sumToyota += sale.price)
      : true;
  });

  return {
    Ford: sumFord,
    Honda: sumHonda,
    "Land Rover": sumLandRover,
    Toyota: sumToyota,
  };
}

module.exports = sales;
