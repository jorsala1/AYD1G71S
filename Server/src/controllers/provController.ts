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
    
    //obtener un proveedor
    public async obtenerProv(req:Request, res:Response){
        const {id} = req.body
        console.log(req.body);
        const proveedor = JSON.parse(JSON.stringify(await pool.query(`select * from Proveedor
        where id = '${id}' ;`)))[0]
        if(proveedor == null){
            console.log("No se encontro el proveedor");
            return res.sendStatus(404);
        }else{
            res.json({proveedor});
        }
    }


    //actualizar un proveedor
    public async actualizarProv(req:Request, res:Response){
        const {id} = req.body['id']
        let u = req.body['id']
        console.log(u)
        await pool.query('update Proveedor set ? where id = ?', [req.body, u]);        
        res.json({message:"El Proveedor fue actualizado"});
    }

    //Eliminar un proveedor
    public async eliminarProv(req:Request,res:Response){
        const { id } = req.params
        let u = req.body['id']
        console.log(u)
        await pool.query('DELETE FROM Proveedor WHERE id = ?',[u]);
        res.json({message:"El proveedor fue eliminado"});
    }

}


export const provController = new ProvController();