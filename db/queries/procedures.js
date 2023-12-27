const {Query} = require("../models");

const getSalesReport = (category) => {
    return Query("CALL spSalesReport(?", [category]);
};

const getHighestSellers = () => {
    return Query("CALL spHighestSellers()");
};

module.exports = {
    getSalesReport,
    getHighestSellers,
};