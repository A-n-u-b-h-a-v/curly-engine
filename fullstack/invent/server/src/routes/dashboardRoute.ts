import { getDashboardMetrics } from './../controllers/dashsboardController';
import { Router } from "express";

const router=Router()

router.get("/",getDashboardMetrics)

export default router;
