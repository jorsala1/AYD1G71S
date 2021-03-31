"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventaController_1 = require("../controllers/ventaController");
class VentaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ventaController_1.ventaController.index);
        this.router.get('/last', ventaController_1.ventaController.getUltimaVenta);
        this.router.post('/crearVenta', ventaController_1.ventaController.create);
    }
}
const ventaRoutes = new VentaRoutes();
exports.default = ventaRoutes.router;
