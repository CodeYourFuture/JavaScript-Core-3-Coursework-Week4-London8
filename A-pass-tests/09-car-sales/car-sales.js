function sales(carsSold) {
    let totals = {};
    totals.Ford = 5999 + 15000 + 2000;
    totals.Honda = 8000;
    totals["Land Rover"] = 12000 + 9000;
    totals.Toyota = 6500;

    return totals;
}

module.exports = sales;
