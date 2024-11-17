import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_LABELS } from "@/app/_constants/transaction";
import { TotalExpensePerCategory } from "@/app/_data/types";
import { formatMoney } from "@/app/_helpers/formatMoney";
import { FC } from "react";

interface ExpensesByCategoryProps {
  expenses: TotalExpensePerCategory[];
}

const ExpensesByCategory: FC<ExpensesByCategoryProps> = ({ expenses }) => {
  return (
    <ScrollArea className="col-span-2 rounded-3xl border">
      <CardHeader>
        <CardTitle className="border-b pb-6">Gastos por categoria</CardTitle>
      </CardHeader>
      <CardContent>
        {expenses.map((item) => (
          <div className="space-y-2" key={item.category}>
            <div className="flex justify-between text-sm font-bold">
              <p>{TRANSACTION_CATEGORY_LABELS[item.category]}</p>
              <p>{item.percentageOfTotal} %</p>
            </div>
            <Progress value={item.percentageOfTotal} />
            <p className="text-sm font-semibold text-gray-500">
              {formatMoney(item.totalAmount).split(",")[0]}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensesByCategory;
