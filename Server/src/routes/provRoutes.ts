import {Router} from 'express';
import pool from '../database';
import {provController}  from '../controllers/provController'

class ProvRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',provController.index); // visualizar listado de proveedores
        this.router.post('/create',provController.create);//crear un nuevo proveedor
    }
}


const provRoutes = new ProvRoutes();
export default provRoutes.router;