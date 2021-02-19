import {Request, Response} from 'express';
import pool from '../database'

class ProductController{

   public async index (req:Request,res:Response){
       const respuesta = await pool.query('select * from product');
        res.json(respuesta);
    }
}

export const productController = new ProductController();