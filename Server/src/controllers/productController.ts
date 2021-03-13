import {Request, Response} from 'express';
import pool from '../database'

class ProductController{

   public async index (req:Request,res:Response){
       const respuesta = await pool.query('select * from producto');
        res.json(respuesta);
    }

      // Creación de productos
      public async create (req:Request,res:Response):Promise<void>{
        await pool.query('insert into producto set ?',[req.body])
        res.json({respuesta: 'Se creo un nuevo producto'});
    }
}

export const productController = new ProductController();