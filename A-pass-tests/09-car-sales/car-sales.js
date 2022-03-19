
    function sales(carsSold) {
        const result = {};
        carsSold.forEach((car) => {
          if (car.make in result) {
            obj[car.make] += car.price;
          } else {
            obj[car.make] = car.price;
          }
        });
        return result;
      }

module.exports = sales;
