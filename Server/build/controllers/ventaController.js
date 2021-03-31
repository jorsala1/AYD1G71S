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
exports.ventaController = void 0;
const database_1 = __importDefault(require("../database"));
class VentaController {
    // listar ventas
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('select * from ventas;');
            res.json(respuesta);
        });
    }
    // crear una nueva venta
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.body.CodigoUsuario;
            yield database_1.default.query(`insert into ventas ( CodigoUsuario ) values (${usuario});`);
            res.status(200).json({ respuesta: 'Se creo una nueva venta' });
        });
    }
    //obtener ultima venta para la carga del detalle 
    getUltimaVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const venta = JSON.parse(JSON.stringify(yield database_1.default.query(`select id from ventas
      order by id desc ;`)))[0];
            if (venta == null) {
                console.log("No se encontro el id de la venta");
                return res.sendStatus(404);
            }
            else {
                res.status(200).json({ venta });
            }
        });
    }
    //lenar el detalle de la venta
    llenarDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_venta = req.body.id_venta;
            const id_producto = req.body.id_producto;
            const cantidad_prod = req.body.cantidad;
            yield database_1.default.query(`CALL llenar_venta(${id_venta},${id_producto},${cantidad_prod});`);
            res.status(200).json({ respuesta: 'Se lleno tupla de detalle de venta asociado a la venta ' + id_venta });
        });
    }
    // mostrar el total de la venta 
    valorTotal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.body.CodigoUsuario;
            const id_venta = req.body.id_venta;
            const respuesta = yield database_1.default.query(`select u.CodigoUsuario, sum(dv.monto_producto) as total from detalle_venta dv, ventas v, Usuario u
        where dv.id_venta  = v.id
        and v.CodigoUsuario  = u.CodigoUsuario
        and  u.CodigoUsuario = ${usuario}
        and v.id = ${id_venta}
        group by u.CodigoUsuario;`);
            res.status(200).json(respuesta);
        });
    }
}
exports.ventaController = new VentaController();
