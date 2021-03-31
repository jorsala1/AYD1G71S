import {Router} from 'express';
import Pool from '../database';
import {direccionController} from '../controllers/direccionController'

class DireccionRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',direccionController.index);
        this.router.post('/createDir',direccionController.createDirection);
        this.router.post('/getDir',direccionController.obtenerDir);
        this.router.put('/updatedir',direccionController.actualizarDir);
    }
}

const direccionRoutes = new DireccionRoutes();
export default direccionRoutes.router;