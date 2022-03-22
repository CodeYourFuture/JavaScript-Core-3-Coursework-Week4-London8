function sales(carsSold) {
  const result = {};
  carsSold.map((car) => {
    if (result[car.make] > 0) result[car.make] = result[car.make] + car.price;
    else result[car.make] = car.price;
  });
  return result;
}

module.exports = sales;

let carsSold = [
  { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
  { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
  { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
  { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
  { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
  { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
  { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
];

let output = sales(carsSold);

console.log(output);
