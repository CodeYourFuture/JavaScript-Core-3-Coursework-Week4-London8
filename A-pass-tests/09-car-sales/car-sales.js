function sales(carsSold) {
    let totals = {};
     carsSold.forEach((element) => {
     if (element.make !== totals[element.make]) {
       totals[element.make] = 0;
     }
     });

     carsSold.forEach((element) => {
         (totals[element.make] += element.price);
         return totals;
     });

   //return object
   return totals;
 
}

module.exports = sales;
