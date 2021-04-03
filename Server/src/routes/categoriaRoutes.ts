import {Router} from 'express';
import Pool from '../database';
import {categoriaController} from '../controllers/categoriaController'

class CategoriaRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',categoriaController.index);
    }
}

const categoriaRoutes = new CategoriaRoutes();
export default categoriaRoutes.router;