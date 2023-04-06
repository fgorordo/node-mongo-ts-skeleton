import { NextFunction, Request, Response } from "express";
import { validateSignature } from "../../helpers";

export const authRequired = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = await validateSignature(req);
        req.user = payload
        next();
    }catch (err) {
        next(err);
        // if (err.message === "No token on headers") return res.status(401).json({
        //     msg: "No bearer token on headers"
        // })
        // throw new Error(err.message);
    };
};