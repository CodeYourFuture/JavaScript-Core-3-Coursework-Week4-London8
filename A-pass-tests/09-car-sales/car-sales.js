function sales(carsSold) {
  let allFord = [];
  let allHonda = [];
  let allLandRover = [];
  let allToyota = [];

  carsSold.filter((item) => {
    if (item.make === "Ford") {
      allFord.push(item);
    } else if (item.make === "Honda") {
      allHonda.push(item);
    } else if (item.make === "Land Rover") {
      allLandRover.push(item);
    } else {
      allToyota.push(item);
    }
  });

  allFord;
  allHonda;
  allLandRover;
  allToyota;

  let totalFordPrice = allFord
    .map((item) => item.price)
    .reduce((a, b) => a + b, 0);

  let totalHondaPrice = allHonda
    .map((item) => item.price)
    .reduce((a, b) => a + b, 0);

  let totalLandRoverPrice = allLandRover
    .map((item) => item.price)
    .reduce((a, b) => a + b, 0);

  let totalToyotaPrice = allToyota
    .map((item) => item.price)
    .reduce((a, b) => a + b, 0);

  const totals = new Object();
  totals["Ford"] = totalFordPrice;
  totals["Honda"] = totalHondaPrice;
  totals["Land Rover"] = totalLandRoverPrice;
  totals["Toyota"] = totalToyotaPrice;

  return totals;
}

module.exports = sales;
