import {Request, Response, text} from 'express'
import pool from '../database'

class DireccionController{

    public async index (req:Request, res:Response){
        const respuesta = await pool.query('select * from categoria');
        res.json(respuesta);
    }


}


export const direccionController = new DireccionController();