import {Router} from 'express';
import Pool from '../database';
import {productController} from '../controllers/productController'

class UserRoutes{
   public router : Router = Router();

   constructor(){
        this.config();
   }

   config():void{
       //this.router.get('/', productController.index );
   }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;