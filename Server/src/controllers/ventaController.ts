import {Request, Response, text} from 'express'
import pool from '../database'

class VentaController{

    // listar ventas
    public async index (req:Request, res:Response){
        const respuesta = await pool.query('select * from ventas;');
        res.json(respuesta);
    }

    // crear una nueva venta
    public async create (req:Request,res:Response):Promise<void>{
        const usuario = req.body.CodigoUsuario;
        await pool.query(`insert into ventas ( CodigoUsuario ) values (${usuario});`)
        res.status(200).json({respuesta: 'Se creo una nueva venta'});
    }

    //obtener ultima venta para la carga del detalle 
    public async getUltimaVenta (req:Request, res:Response){
        const venta = JSON.parse(JSON.stringify(await pool.query(`select id from ventas
      order by id desc ;`)))[0]
      if(venta == null){
          console.log("No se encontro el id de la venta");
          return res.sendStatus(404);
      }else{
          res.status(200).json(venta);
      }
    }

    //lenar el detalle de la venta
    public async llenarDetalle (req:Request, res:Response){
        const id_venta = req.body.id_venta;
        const id_producto = req.body.id_producto;
        const cantidad_prod = req.body.cantidad;

        await pool.query(`CALL llenar_venta(${id_venta},${id_producto},${cantidad_prod});`)
        res.status(200).json({respuesta: 'Se lleno tupla de detalle de venta asociado a la venta '+ id_venta});
    }

    // mostrar el total de la venta 
    public async valorTotal (req:Request, res:Response){
        const usuario = req.body.CodigoUsuario;
        const id_venta = req.body.id_venta;

        const respuesta = await pool.query(`select u.CodigoUsuario, sum(dv.monto_producto) as total from detalle_venta dv, ventas v, Usuario u
        where dv.id_venta  = v.id
        and v.CodigoUsuario  = u.CodigoUsuario
        and  u.CodigoUsuario = ${usuario}
        and v.id = ${id_venta}
        group by u.CodigoUsuario;`);
        res.status(200).json(respuesta);
    }
}


export const ventaController = new VentaController();