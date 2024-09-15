import express from "express";

import uploadMiddleware from "./middlewares/upload.middleware";
import uploadController from "./controllers/upload.controller";
import productsController from "./controllers/products.controller";
import categoriesController from "./controllers/categories.controller";
import orderController from "./controllers/order.controllers";
import authController from "./controllers/auth.controller";
import authMiddleware from "./middlewares/auth.middleware";
import rbacMiddleware from "./middlewares/rbac.middleware";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

router.get("/categories", categoriesController.findAll);
router.post("/categories", categoriesController.create);
router.get("/categories/:id", categoriesController.findOne);
router.put("/categories/:id", categoriesController.update);
router.delete("/categories/:id", categoriesController.delete);

// Auth
router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.post("/auth/me", authMiddleware, authController.me);
router.put(
  "/auth/update-profile",
  authMiddleware,
  authController.updateProfile
);
router.post(
  "/auth/me",
  [authMiddleware, rbacMiddleware(["admin"])],
  authController.me
);

//Order
router.post("/orders", orderController.create);
router.get("/orders", orderController.findAll);
router.get("/orders/:id", orderController.findOne);
router.patch("/orders/:id/status", orderController.update);
router.get("/orders/user/:id", orderController.getOrdersByUserId);

export default router;
