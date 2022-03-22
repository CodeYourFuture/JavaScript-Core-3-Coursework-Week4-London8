function sales(carsSold) {
  const obj = {};
  carsSold.forEach((element) => {
    if (element.make in obj) {
      obj[element.make] += element.price;
    } else {
      obj[element.make] = element.price;
    }
  });
  return obj;
}

module.exports = sales;
