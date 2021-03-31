import {Request, Response, text} from 'express'
import pool from '../database'

class DireccionController{

    //listar las direcciones
    public async index (req:Request, res:Response){
        const respuesta = await pool.query('select * from direccion');
        res.json(respuesta);
    }

    //agregar direcciones a usuario
    public async createDirection(req:Request, res:Response){
        await pool.query('insert into direccion set ?', [req.body]);
        res.status(200).json({respuesta: 'se creo una nueva direccion'});
    }


}


export const direccionController = new DireccionController();