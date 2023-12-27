const {Query} = require("../models");

const getAllProducts = () => {
    return Query("SELECT * FROM products");
}

const getOneProduct = (id) => {
    return Query("SELECT * FROM products WHERE ProductID = ?", [id]);
}

const insertOneProduct = (product) => {
    return Query("INSERT INTO products SET ?", [product]);
}

const updateOneProduct = (id, product) => {
    return Query("UPDATE products SET ? WHERE ProductID = ?", [product, id]);
}

const removeOneProduct = (id) => {
    return Query("DELETE FROM products WHERE ProductID = ?", [id]);
};

module.exports = {
    getAllProducts,
    getOneProduct,
    insertOneProduct,
    updateOneProduct,
    removeOneProduct,
};