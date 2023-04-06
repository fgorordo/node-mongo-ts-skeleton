import { NextFunction, Request, Response, Router } from "express";
import { Customer } from "../database/models/Customer";
import { seedData } from "../database/seed/seedData";

export const seedApi = Router();

seedApi.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const resp = await Customer.insertMany(seedData)
        console.log(resp)
        return res.send("Seed executed successfully")
    } catch (error) {
        console.log(error)
        next(error)
    }
});