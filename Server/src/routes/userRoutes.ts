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
       this.router.post('/log',userController.login);
       this.router.post('/getUsuario',userController.obtenerUs);
       this.router.put('/update',userController.actualizarUs);
       this.router.delete('/delete/:Username',userController.eliminarUsu);
   }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;