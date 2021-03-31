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
exports.direccionController = void 0;
const database_1 = __importDefault(require("../database"));
class DireccionController {
    //listar las direcciones
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('select * from direccion');
            res.status(200).json(respuesta);
        });
    }
    //agregar direcciones a usuario
    createDirection(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into direccion set ?', [req.body]);
            res.status(200).json({ respuesta: 'se creo una nueva direccion' });
        });
    }
    //Obtener una direccion Especifica
    obtenerDir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            console.log(req.body);
            const dir = JSON.parse(JSON.stringify(yield database_1.default.query(`select * from direccion
        where id = '${id}' ;`)))[0];
            if (dir == null) {
                console.log("No se encontro la direccion");
                return res.sendStatus(404);
            }
            else {
                res.status(200).json({ dir });
            }
        });
    }
    //actualizar direccion
    actualizarDir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body['id'];
            let u = req.body['id'];
            yield database_1.default.query('update direccion set ? where id = ?', [req.body, u]);
            res.status(200).json({ message: "La direccion fue actualizada" });
        });
    }
}
exports.direccionController = new DireccionController();
