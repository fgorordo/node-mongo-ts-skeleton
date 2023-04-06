import {Request, Response, NextFunction} from 'express'

export const errorHandler = (err: any, req: Request ,res: Response, next: NextFunction): Response => {
    console.log({err})
    return res.status(500).json({
        detail: err,
        message: "ooops it seems we broke something, check the logs"
    });
};