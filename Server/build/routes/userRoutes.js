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
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
