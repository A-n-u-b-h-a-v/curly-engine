
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GetExpenseByCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const ExpenseByCategoryRaw = await prisma.expenseByCategory.findMany({
            orderBy: {
                date: "desc"
            }
        })
        const ExpenseByCategorySummary = ExpenseByCategoryRaw.map((item) => ({
            ...item, amount: item.amount.toString()
        }))
        res.json(ExpenseByCategorySummary)
    } catch (error) {
        res.status(500).json({ message: "Error retrieving expense by category" })
    }
}