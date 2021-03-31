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
    }
}

const direccionRoutes = new DireccionRoutes();
export default direccionRoutes.router;