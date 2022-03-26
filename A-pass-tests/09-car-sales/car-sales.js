function sales(carsSold) {
  
  let carMake = [];
  let pricesArr = []
  
  let totalOfEachCarMake = []

  for (let carSold of carsSold) {
    
    if (!carMake.includes(carSold.make)) {
      carMake.push(carSold.make);
      
      
    }
    
    
  }
  

  for (let i=0; i<carMake.length; i++) {
    let priceArr = [];
    for (let j=0; j<carsSold.length; j++) {
      if (carMake[i] === carsSold[j].make) {
        priceArr.push(carsSold[j].price)
      }
      
    }
    
    pricesArr.push(priceArr.reduce((pr1, pr2) => pr1 + pr2))
  }; 
  
  for (let a=0; a<carMake.length; a++) {
    let makeAndPriceArr = []
    makeAndPriceArr.push(carMake[a])  
    makeAndPriceArr.push(pricesArr[a]) 
    totalOfEachCarMake.push(makeAndPriceArr) 
  }


  const total = Object.fromEntries(totalOfEachCarMake);
  
  return total
 
}

module.exports = sales;
