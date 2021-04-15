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
       this.router.post('/llenarDetalle',ventaController.llenarDetalle);
       this.router.post('/valorTotal',ventaController.valorTotal);
       this.router.get('/getEstadoPedidos', ventaController.estados);
       this.router.get('/pedidos', ventaController.pedidos);
       this.router.put('/updatePedido', ventaController.updatePedido);
       this.router.post('/misPedidos', ventaController.pedidosCliente);
   }
}

const ventaRoutes   = new VentaRoutes();
export default ventaRoutes.router;