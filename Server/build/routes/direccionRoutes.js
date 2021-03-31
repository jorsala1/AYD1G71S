"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const direccionController_1 = require("../controllers/direccionController");
class DireccionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', direccionController_1.direccionController.index);
        this.router.post('/createDir', direccionController_1.direccionController.createDirection);
        this.router.post('/getDir', direccionController_1.direccionController.obtenerDir);
        this.router.put('/updatedir', direccionController_1.direccionController.actualizarDir);
    }
}
const direccionRoutes = new DireccionRoutes();
exports.default = direccionRoutes.router;
