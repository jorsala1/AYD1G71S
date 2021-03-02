import {Request, Response, text} from 'express'
import pool from '../database'

class ProvController{

    public async index (req:Request,res:Response){
        const respuesta = await pool.query('select * from Proveedor');
         res.json(respuesta);
     }

    // Creación de usuarios
    public async create (req:Request,res:Response):Promise<void>{
        await pool.query('insert into Proveedor set ?',[req.body])
        res.json({respuesta: 'Se creo un nuevo proveedor'});
    }    

}


export const provController = new ProvController();