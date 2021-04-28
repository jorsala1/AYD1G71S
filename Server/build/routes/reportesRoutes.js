"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesController_1 = require("../controllers/reportesController");
class VentaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/ventasmes', reportesController_1.reporteController.verVentasMes);
    }
}
const ventaRoutes = new VentaRoutes();
exports.default = ventaRoutes.router;
