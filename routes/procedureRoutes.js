const express = require("express");
const {
    getHighestSellers,
    getSalesReport,
} = require("../db/queries/procedures");
const exp = require("constants");

const router = express.Router();

router.get("/highest_sellers", async (req, res, next) => {
    try {
        let data = await getHighestSellers();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.get("/report/:category", async (req, res, next) => {
    try {
        let {category} = req.params
        let data = await getSalesReport(category);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;