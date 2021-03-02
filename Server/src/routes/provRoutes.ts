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
        this.router.post('/getProveedor',provController.obtenerProv);//obtener un proveedor
        this.router.put('/updateProv',provController.actualizarProv); // actualizar un proveedor
        this.router.delete('/delete',provController.eliminarProv);
    }
}


const provRoutes = new ProvRoutes();
export default provRoutes.router;