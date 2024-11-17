import { TransactionType } from "@prisma/client";
import { db } from "../_lib/prisma";
import { TotalExpensePerCategory, TransactionPercentagePerType } from "./types";

export const getDashboard = async (month: string) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const depositsTotal =
    Number(
      (
        await db.transaction.aggregate({
          where: { ...where, type: "DEPOSIT" },
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const investimentsTotal =
    Number(
      (
        await db.transaction.aggregate({
          where: { ...where, type: "INVESTMENT" },
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const expensesTotal =
    Number(
      (
        await db.transaction.aggregate({
          where: { ...where, type: "EXPENSE" },
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const transactionsTotal =
    Number(
      (
        await db.transaction.aggregate({
          where,
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const typesPercentage: TransactionPercentagePerType = {
    [TransactionType.DEPOSIT]: Math.round(
      (depositsTotal / transactionsTotal) * 100,
    ),
    [TransactionType.INVESTMENT]: Math.round(
      investimentsTotal / transactionsTotal,
    ),
    [TransactionType.EXPENSE]: Math.round(expensesTotal / transactionsTotal),
  };

  const totalExpensePerCategory: TotalExpensePerCategory[] = (
    await db.transaction.groupBy({
      by: ["category"],
      where: {
        ...where,
        type: TransactionType.EXPENSE,
      },
      _sum: {
        amount: true,
      },
    })
  ).map((category) => ({
    category: category.category,
    totalAmount: Number(category._sum.amount),
    percentageOfTotal: Math.round(Number(category._sum.amount) / expensesTotal),
  }));

  const lastTransactions = await db.transaction.findMany({
    where,
    orderBy: { date: "desc" },
    take: 15,
  });

  const balance = depositsTotal - investimentsTotal - expensesTotal;

  return {
    balance,
    depositsTotal,
    expensesTotal,
    typesPercentage,
    lastTransactions,
    investimentsTotal,
    totalExpensePerCategory,
  };
};
export type DashboardDataType = Awaited<ReturnType<typeof getDashboard>>;
