import {Request, Response, text} from 'express';
import pool from '../database'

class UserController{

   public async index (req:Request,res:Response){
       const respuesta = await pool.query('select * from usuario');
        res.json(respuesta);
    }

    public async create (req:Request,res:Response):Promise<void>{
        await pool.query('insert into Usuario set ?',[req.body])
        res.json({respuesta: 'Se creo un nuevo usuario'});
    }
}

export const userController = new UserController();