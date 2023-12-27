const express = require("express")

const {
    getAllEmployees,
    getOneEmployee,
    insertOneEmployee,
    updateOneEmployee,
    removeOneEmployee,
} = require("../db/queries/employees");

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data;
        if(id) {
            data = await getOneEmployee(id);
        } else {
            data = await getAllEmployees();
        }
            res.status(200).json(data || { msg: "No data available"});
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        let { body } = req;
        let data = await insertOneEmployee(body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let { body } = req;
        let data = await updateOneEmployee(id, body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data = await updateOneEmployee(id);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
