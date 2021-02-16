"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/', productController.index );
        this.router.post('/create', userController_1.userController.create);
        this.router.post('/log', userController_1.userController.login);
        this.router.post('/getUsuario', userController_1.userController.obtenerUs);
        this.router.put('/update', userController_1.userController.actualizarUs);
        this.router.delete('/delete/:Username', userController_1.userController.eliminarUsu);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
