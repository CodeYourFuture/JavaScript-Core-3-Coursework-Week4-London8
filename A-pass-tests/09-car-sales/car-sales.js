function sales(carsSold) {
  let totals = {}
  carsSold.forEach(carSale => {
      let carBrand = carSale.make;
      if(carBrand in totals){
          totals[carBrand] += carSale.price;
      }
      else{
          totals[carBrand] = carSale.price;
      }
  });
  return totals;
}
  
module.exports = sales;
