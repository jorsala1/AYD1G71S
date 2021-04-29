import {Router} from 'express';
import Pool from '../database';
import {reporteController} from '../controllers/reportesController'

class VentaRoutes{
   public router : Router = Router();

   constructor(){
        this.config();
   }

   config():void{
       this.router.get('/ventasmes',reporteController.verVentasMes);
       this.router.get('/gananciaTotal', reporteController.gananciasTotales);
       this.router.get('/gananciaDetalle', reporteController.gananciasDetalle);
       this.router.get('/gananciaFiltrada', reporteController.gananciaFiltrada);
   }
}

const ventaRoutes   = new VentaRoutes();
export default ventaRoutes.router;