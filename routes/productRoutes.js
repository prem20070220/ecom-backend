const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productsRoutes = express.Router();

productsRoutes.get("/products", getAllProducts);

productsRoutes.get("/products/:id", getProductById);

productsRoutes.post("/products", createProduct);

productsRoutes.put("/products/:id", updateProduct);

productsRoutes.delete("/products/:id", deleteProduct);

module.exports = productsRoutes;
