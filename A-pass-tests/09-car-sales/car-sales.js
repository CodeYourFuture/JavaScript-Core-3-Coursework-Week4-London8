function sales(carsSold) {
    const totals = {};
    carsSold.forEach( element => {
        if (!totals.hasOwnProperty(element.make))
              totals[element.make] = 0;
        totals[element.make] += element.price   
                                    }         
    );

    return totals;
}

module.exports = sales;
