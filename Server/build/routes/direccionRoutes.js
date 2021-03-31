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
    }
}
const direccionRoutes = new DireccionRoutes();
exports.default = direccionRoutes.router;
