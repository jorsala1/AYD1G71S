import {Request, Response, text} from 'express'
import pool from '../database'

class DireccionController{

    //listar las direcciones
    public async index (req:Request, res:Response){
        const respuesta = await pool.query('select * from direccion');
        res.status(200).json(respuesta);
    }

    public async getDirecciones (req:Request, res:Response){
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM direccion WHERE CodigoUsuario = ?', id);
        if ( games.length > 0 ){
            return res.json(games[0]);
        }
        res.status(404).json({"text": "The user doesn't exists"});
    }

    //agregar direcciones a usuario
    public async createDirection(req:Request, res:Response){
        await pool.query('insert into direccion set ?', [req.body]);
        res.status(200).json({respuesta: 'se creo una nueva direccion'});
    }

    //Obtener una direccion Especifica
    public async obtenerDir(req:Request,res:Response){
        const {id} = req.body
        console.log(req.body);
        const dir = JSON.parse(JSON.stringify(await pool.query(`select * from direccion
        where id = '${id}' ;`)))[0]
        if(dir == null){
            console.log("No se encontro la direccion");
            return res.sendStatus(404);
        }else{
            res.status(200).json({dir});
        }
    }

    //actualizar direccion
    public async actualizarDir(req:Request, res:Response){
        const {id} = req.body['id']
        let u = req.body['id']
        await pool.query('update direccion set ? where id = ?', [req.body, u]);        
        res.status(200).json({message:"La direccion fue actualizada"});
    }


}


export const direccionController = new DireccionController();