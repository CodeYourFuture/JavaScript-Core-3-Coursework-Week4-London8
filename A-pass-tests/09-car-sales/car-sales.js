function sales(carsSold) {
  let answer = {};
  carsSold.forEach((car) => {
    let item = car.make;
    if (item in answer) {
      answer[item] += car.price;
    } else {
      answer[item] = car.price;
    }
  });
  return answer;
}

module.exports = sales;
