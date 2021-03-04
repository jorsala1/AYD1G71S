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
        this.router.post('/getProveedor', provController_1.provController.obtenerProv); //obtener un proveedor
        this.router.put('/updateProv', provController_1.provController.actualizarProv); // actualizar un proveedor
        this.router.delete('/deleteProv/:id', provController_1.provController.eliminarProv);
    }
}
const provRoutes = new ProvRoutes();
exports.default = provRoutes.router;
