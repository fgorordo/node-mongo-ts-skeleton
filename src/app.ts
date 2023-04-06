import express from 'express'
import server from './server';
import mongoConnection from './database/mongoConnection';

const startServer = async () => {
    const app = express();

    //TODO: Connect DB
    await mongoConnection();

    await server(app)

    app.listen(3000, () => {
        console.log("Server is running")
    })
};

startServer();