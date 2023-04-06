import express, {Application} from 'express'
import cors from 'cors'
import helmet from "helmet";
import { rootRouter } from './router';
import { errorHandler } from './helpers/error-handler';

const server = async (app: Application) => {
    
    app.use(helmet()); // * HTTP headers basic protection
    app.use(express.json({limit: "1mb"})); // * Parse JSON
    app.use(express.urlencoded({extended: true,limit: "1mb"})); // * Parse urlencoded bodies
    app.use(cors()); // * Cross-origin resource sharing 
    app.use(express.static(__dirname + '/public')); // * Serving static files

    //! Routes
    app.use("/api/v1", rootRouter);

    //TODO: EXCEPTIONS HANDLER
    app.use(errorHandler)

}

export default server;
