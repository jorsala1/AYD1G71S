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
        res.json({respuesta: 'Se creo una nueva venta'});
    }

    //obtener ultima venta para la carga del detalle 
    public async getUltimaVenta (req:Request, res:Response){
        const venta = JSON.parse(JSON.stringify(await pool.query(`select id from ventas
      order by id desc ;`)))[0]
      if(venta == null){
          console.log("No se encontro el id de la venta");
          return res.sendStatus(404);
      }else{
          res.json({venta});
      }
    }


}


export const ventaController = new VentaController();