const express = require("express");

const {
    getAllEmployees,
    getOneEmployee,
    insertOneEmployee,
    updateOneEmployee,
    removeOneEmployee,
} = require("../db/queries/employees");
const { getOneProduct, getAllProducts, insertOneProduct } = require("../db/queries/products");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data;
        if(id) {
            [data] = await getOneProduct(id);
        } else {
            data = await getAllProducts();
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.post("", async (req, res, next) => {
    try {
        let { body } = req;
        let data = await insertOneProduct(body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let { body } = req;
        let data = await insertOneProduct(id, body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data = await removeOneProduct(id);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;