import {Request, Response} from 'express';

class IndexController{

   public index (req:Request,res:Response){
        res.send('Hola, probando');
    }
}

export const indexController = new IndexController();