"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productController_1.productController.index);
        this.router.post('/create', productController_1.productController.create);
        this.router.post('/getProduct', productController_1.productController.obtenerProd);
        this.router.put('/updateProd', productController_1.productController.actualizarProd);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
