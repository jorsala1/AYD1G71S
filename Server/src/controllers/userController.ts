import {Request, Response, text} from 'express';
import pool from '../database'


class UserController{


  
   public async index (req:Request,res:Response){
       const respuesta = await pool.query('select * from Usuario');
        res.json(respuesta);
    }

    // Creación de usuarios
    public async create (req:Request,res:Response):Promise<void>{
        await pool.query('insert into Usuario set ?',[req.body])
        res.json({respuesta: 'Se creo un nuevo usuario'});
    }

    // Verificacion de usuario
    public async login(req:Request,res:Response){
        
        const {Username, Password} = req.body
        console.log(req.body);
        const jwt = require("jsonwebtoken")
        const user = JSON.parse(JSON.stringify((await pool.query(`select * from Usuario
        where Username = '${Username}' and Password = '${Password}';`))))[0]
        if (user == null) {
            console.log("No se encontro el usuario");
            return res.sendStatus(401);
        }
        const secretkey = 'f85e16c834b9e4d4c3c5f3c9bc7ce0d69ca633629d04d0f2a05c811a1c2686dcacc6b03cd4bad510956f610db15dcf2dafc3989182d479f8e9817078a0e4abb2';
        jwt.sign({user}, secretkey, (err:any, token:any) => {
            console.log("Se encontro el usuario");
            res.json({token});
        });
    }

    // Obtener un usuario
    public async obtenerUs(req:Request,res:Response){
        const {Username} = req.body
        console.log(req.body);
        const user = JSON.parse(JSON.stringify(await pool.query(`select * from Usuario
        where Username = '${Username}' ;`)))[0]
        if(user == null){
            console.log("No se encontro el usuario");
            return res.sendStatus(404);
        }else{
            res.json({user});
        }
    }

    //upddate del usuario
    public async actualizarUs(req:Request,res:Response){
        const {Username} = req.body['Username']
        console.log(req.body['Username'])
        let u = req.body['Username']
        console.log(u)
        await pool.query('update Usuario set ? where Username = ?', [req.body, u]);        
        res.json({message:"El usuario fue actualizado"});
    }

    //eliminar un usuario
    public async eliminarUsu(req:Request,res:Response){
        console.log("llego aqui")
        const { Username } = req.params
        console.log(req.params)
        await pool.query('DELETE FROM Usuario WHERE Username = ?',[Username]);
        res.json({message:"El usuario fue eliminado"});
    }



}

export const userController = new UserController();