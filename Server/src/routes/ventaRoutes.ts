import {Router} from 'express';
import Pool from '../database';
import {ventaController} from '../controllers/ventaController'

class VentaRoutes{
   public router : Router = Router();

   constructor(){
        this.config();
   }

   config():void{
       this.router.get('/', ventaController.index );
       this.router.get('/last',ventaController.getUltimaVenta);
       this.router.post('/crearVenta',ventaController.create);
   }
}

const ventaRoutes   = new VentaRoutes();
export default ventaRoutes.router;