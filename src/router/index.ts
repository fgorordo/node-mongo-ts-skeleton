import { Router } from "express";
import { defaultApi } from "../api"
import { seedApi } from "../api";

export const rootRouter = Router();

rootRouter.use("/default", defaultApi)
rootRouter.use("/seed", seedApi)
