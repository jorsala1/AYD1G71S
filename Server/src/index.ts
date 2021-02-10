import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

class Server{
    //creando la aplicacion
    public app:Application;
    constructor(){
      this.app =   express();
      this.config();
      this.routes();
    }

    //configuraciones iniciales del servidor 
    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
    }

    //Manejo de rutas 
    routes():void{
        this.app.use(indexRoutes)
        this.app.use('/products',productRoutes)
        this.app.use('/user',userRoutes)
    }

    //inicializar el server
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor en el puerto ',this.app.get('port'));
        });
    }
}

//inicializacion del server
const server = new Server();
server.start();