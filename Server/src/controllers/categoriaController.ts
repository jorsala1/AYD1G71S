import {Request, Response, text} from 'express'
import pool from '../database'

class CategoriaController{

    public async index (req:Request, res:Response){
        const respuesta = await pool.query('select * from categoria');
        res.json(respuesta);
    }


}


export const categoriaController = new CategoriaController();