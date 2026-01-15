import { Router } from "express";
import { GetExpenseByCategory } from "../controllers/expensesController";

const route=Router()

route.get("/",GetExpenseByCategory)

export default route