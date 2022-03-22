function sales(carsSold) {
  let total = {};
  carsSold.forEach((obj) => {
    if (total[obj.make]) {
      total[obj.make] += obj.price;
    } else {
      total[obj.make] = obj.price;
    }
  });
  return total;
}

module.exports = sales;
