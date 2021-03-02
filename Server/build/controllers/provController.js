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
exports.provController = void 0;
const database_1 = __importDefault(require("../database"));
class ProvController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('select * from Proveedor');
            res.json(respuesta);
        });
    }
    // Creación de usuarios
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into Proveedor set ?', [req.body]);
            res.json({ respuesta: 'Se creo un nuevo proveedor' });
        });
    }
    //obtener un proveedor
    obtenerProv(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            console.log(req.body);
            const proveedor = JSON.parse(JSON.stringify(yield database_1.default.query(`select * from Proveedor
        where id = '${id}' ;`)))[0];
            if (proveedor == null) {
                console.log("No se encontro el proveedor");
                return res.sendStatus(404);
            }
            else {
                res.json({ proveedor });
            }
        });
    }
    //actualizar un proveedor
    actualizarProv(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body['id'];
            let u = req.body['id'];
            console.log(u);
            yield database_1.default.query('update Proveedor set ? where id = ?', [req.body, u]);
            res.json({ message: "El Proveedor fue actualizado" });
        });
    }
    //Eliminar un proveedor
    eliminarProv(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let u = req.body['id'];
            console.log(u);
            yield database_1.default.query('DELETE FROM Proveedor WHERE id = ?', [u]);
            res.json({ message: "El proveedor fue eliminado" });
        });
    }
}
exports.provController = new ProvController();
