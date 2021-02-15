"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const database_1 = __importDefault(require("../database"));
class UserController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('select * from usuario');
            res.json(respuesta);
        });
    }
    // Creación de usuarios
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into Usuario set ?', [req.body]);
            res.json({ respuesta: 'Se creo un nuevo usuario' });
        });
    }
    // Verificacion de usuario
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Username, Password } = req.body;
            const jwt = require("jsonwebtoken");
            const user = JSON.parse(JSON.stringify((yield database_1.default.query(`select * from usuario
        where Username = '${Username}' and password = '${Password}';`))))[0];
            if (user == null) {
                console.log("No se encontro el usuario");
                return res.sendStatus(401);
            }
            const secretkey = 'f85e16c834b9e4d4c3c5f3c9bc7ce0d69ca633629d04d0f2a05c811a1c2686dcacc6b03cd4bad510956f610db15dcf2dafc3989182d479f8e9817078a0e4abb2';
            jwt.sign({ user }, secretkey, (err, token) => {
                console.log("Se encontro el usuario");
                res.json({ token });
            });
        });
    }
}
exports.userController = new UserController();
