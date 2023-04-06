import { Request, Response, Router } from "express";
import { authRequired } from './middlewares/authRequired'

export const defaultApi = Router();

defaultApi.get("/", (req: Request, res: Response) => {
    return res.send("This get endpoint is not implemented yet")
});

defaultApi.get("/protected", authRequired,(req: Request, res: Response) => {
    return res.send("This get endpoint is not implemented yet")
});

defaultApi.get("/:id", (req: Request, res: Response) => {
    return res.send("This get endpoint is not implemented yet, either we got your id: " + req.params.id)
});

defaultApi.post("/", (req: Request, res: Response) => {
    return res.send("This post endpoint is not implemented yet")
});

defaultApi.put("/:id", (req: Request, res: Response) => {
    return res.send("This put endpoint is not implemented yet, either we got your id: " + req.params.id)
});

defaultApi.delete("/:id", (req: Request, res: Response) => {
    return res.send("This delete endpoint is not implemented yet, either we got your id: " + req.params.id)
});