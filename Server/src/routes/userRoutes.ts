import {Router} from 'express';
import Pool from '../database';
import {userController} from '../controllers/userController'

class UserRoutes{
   public router : Router = Router();

   constructor(){
        this.config();
   }

   config():void{
       //this.router.get('/', productController.index );
       this.router.post('/create',userController.create);
   }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;