const express = require("express");
const employeeRouter = require("./employeeRoutes");
const productRouter = require("./productRoutes");

const router = express.Router();

router.post("/newsletter_signup", (req, res, next) => {
    try {
        let { query } = req;
        res.status(200).json(query);
    } catch (error) {
        next(error)
    }
})

router.use("/employees", employeeRouter);
router.use("/products", productRouter);
router.use("/sales", procedureRouter);

module.exports = router;