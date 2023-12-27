const { Query } = require("../models");

const getAllEmployees = () => {
    return Query("SELECT * FROM employees");
};

const getOneEmployee = (id) => {
    return Query("SELECT * FROM employees WHERE EmployeeId = ?", [id]);
};

const removeOneEmployee = (id) => {
    return Query("DELETE FROM employees WHERE EmployeeId = ?", [id]);
};

const updateOneEmployee = (id, body) => {
    return Query("UPDATE employees SET ? WHERE EmployeeId = ?", [id, body]);
};

const insertOneEmployee = (body) => {
    return Query("INSERT INTO employees VALUES = ?", [body]);
};

module.exports = {
    getAllEmployees, 
    getOneEmployee,
    insertOneEmployee,
    updateOneEmployee,
    removeOneEmployee,
};