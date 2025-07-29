const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuth, isAdmin } = require("../middlewares/authMiddlewares");

const productsRoutes = express.Router();

productsRoutes.get("/products", isAuth, getAllProducts);

productsRoutes.get("/products/:id", getProductById);

productsRoutes.post("/products", isAuth, isAdmin, createProduct);

productsRoutes.put("/products/:id", isAuth, isAdmin, updateProduct);

productsRoutes.delete("/products/:id", isAuth, isAdmin, deleteProduct);

module.exports = productsRoutes;
