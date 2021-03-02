"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provController_1 = require("../controllers/provController");
class ProvRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', provController_1.provController.index); // visualizar listado de proveedores
        this.router.post('/create', provController_1.provController.create); //crear un nuevo proveedor
    }
}
const provRoutes = new ProvRoutes();
exports.default = provRoutes.router;
