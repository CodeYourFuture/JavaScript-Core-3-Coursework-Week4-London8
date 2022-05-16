
function sales(carsSold) {
    
    let totalFord = 0 
    let totalLandRover = 0 
    let totalToyota = 0
    let totalHonda = 0
    for(let i =0; i<carsSold.length; i++){ 
        if(carsSold[i].make === 'Ford'){
            totalFord += carsSold[i].price;
        } else if ( carsSold[i].make === 'Honda'){
            totalHonda +=carsSold[i].price
        } else if ( carsSold[i].make === 'Land Rover'){
            totalLandRover +=carsSold[i].price
        } else if ( carsSold[i].make === 'Toyota'){
            totalToyota +=carsSold[i].price
        } else {
            return 'not an array'
        }
    }
    return {
        Ford: totalFord,
        Honda: totalHonda,
        "Land Rover" : totalLandRover,
        Toyota: totalToyota
    }
}

console.log(sales(carsSold))
module.exports = sales;
