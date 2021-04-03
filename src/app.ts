import express, {Application, Request, Response, NextFunction} from 'express';
import ip from 'ip';
import dotenv from "dotenv";
import morgan from 'morgan';

import router from "./routes/index.routes";

dotenv.config();

export class App {

    ipAddress: string;
    app: Application;
    port: number;

    constructor(port?: number){
        this.app = express();
        this.ipAddress = ip.address() || 'localhost';
        this.port = port || 3000;
        this.middlewares();
        this.listen();
        this.routes();

    }

    middlewares() {
        this.app.use(morgan('dev'));
    }

    routes(){

        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
              'Access-Control-Allow-Headers',
              'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
            );
            res.header(
              'Access-Control-Allow-Methods',
              'GET, POST, OPTIONS, PUT, DELETE',
            );
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });

        this.app.use(router);
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running ENVIROMENT:${process.env.NODE_ENV} on http://${this.ipAddress}:${this.port}`)
        }).on('error', ()=> {
            process.on('SIGTERM', () => console.log('server stoped'))
        })
    }

}