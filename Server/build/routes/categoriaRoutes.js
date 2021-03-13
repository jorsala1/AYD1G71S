"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaController_1 = require("../controllers/categoriaController");
class CategoriaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoriaController_1.categoriaController.index);
    }
}
const categoriaRoutes = new CategoriaRoutes();
exports.default = categoriaRoutes.router;
