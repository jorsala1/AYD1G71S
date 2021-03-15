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
exports.productController = void 0;
const database_1 = __importDefault(require("../database"));
class ProductController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('select * from producto');
            res.json(respuesta);
        });
    }
    // Creación de productos
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into producto set ?', [req.body]);
            res.json({ respuesta: 'Se creo un nuevo producto' });
        });
    }
    obtenerProd(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            console.log(req.body);
            const prod = JSON.parse(JSON.stringify(yield database_1.default.query(`select * from producto
      where id = '${id}' ;`)))[0];
            if (prod == null) {
                console.log("No se encontro el producto");
                return res.sendStatus(404);
            }
            else {
                res.json({ prod });
            }
        });
    }
    //upddate del usuario
    actualizarProd(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body['id'];
            console.log(req.body['id']);
            let u = req.body['id'];
            console.log(u);
            yield database_1.default.query('update producto set ? where id = ?', [req.body, u]);
            res.json({ message: "El producto fue actualizado" });
        });
    }
}
exports.productController = new ProductController();
