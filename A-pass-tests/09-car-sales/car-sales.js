function sales(carsSold) {
  let sumFord = 0;
  let sumHonda = 0;
  let sumLandRover = 0;
  let sumToyota = 0;

  carsSold.forEach(sale => {
    sale.make === "Ford" ? sumFord += sale.price : sale.make === "Honda" 
    ? sumHonda += sale.price : sale.make === "Land Rover" 
    ? sumLandRover += sale.price : sale.make === "Toyota" 
    ? sumToyota += sale.price : true;
  })

  // carsSold
  //   .filter((sale) => sale.make === "Ford")
  //   .forEach((sale) => sumFord += sale.price);

  
  // carsSold
  //   .filter((sale) => sale.make === "Honda")
  //   .forEach((sale) => sumHonda += sale.price);

  
  // carsSold
  //   .filter((sale) => sale.make === "Land Rover")
  //   .forEach((sale) => sumLandRover += sale.price);

  
  // carsSold
  //   .filter((sale) => sale.make === "Toyota")
  //   .forEach((sale) => sumToyota += sale.price);

  return {
    Ford: sumFord,
    Honda: sumHonda,
    "Land Rover": sumLandRover,
    Toyota: sumToyota,
  };
}

module.exports = sales;
