import {Router} from 'express';
import Pool from '../database';
import {productController} from '../controllers/productController'

class ProductRoutes{
   public router : Router = Router();

   constructor(){
        this.config();
   }

   config():void{
       this.router.get('/', productController.index );
   }
}

const productRoutes = new ProductRoutes();
export default productRoutes.router;