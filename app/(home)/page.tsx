import { isMatch } from "date-fns";
import { redirect } from "next/navigation";
import MonthSelect from "../_components/month-select";
import { getDashboard } from "../_data/get-dashboard";
import { getCurrentMonth } from "../_helpers/getCurrentMonth";
import ExpensesByCategory from "./_components/expenses-by-category";
import LastTransactions from "./_components/last-transactions";
import SummaryListCards from "./_components/summary-list-cards";
import TransactionsPieChart from "./_components/transactions-piu-chart";

type SearchParamsType = Promise<{
  [key: string]: string | string[] | undefined;
}>;

interface HomeProps {
  searchParams: SearchParamsType;
}

const HomePage = async (props: HomeProps) => {
  const { month } = await props.searchParams;

  const monthIsInvalid =
    !month || isMatch(typeof month, "MM") || typeof month !== "string";

  if (monthIsInvalid) redirect(`?month=${getCurrentMonth()}`);

  const data = await getDashboard(month);

  return (
    <div>
      <div className="mb-7 flex justify-between gap-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <MonthSelect />
      </div>
      <div className="grid grid-cols-[2fr,1fr] gap-6">
        <div className="flex flex-col gap-6">
          <SummaryListCards
            balance={data.balance}
            depositsTotal={data.depositsTotal}
            expensesTotal={data.expensesTotal}
            investimentsTotal={data.investimentsTotal}
          />
          <div className="grid grid-cols-3 grid-rows-1 gap-6">
            <TransactionsPieChart
              depositsTotal={data.depositsTotal}
              expensesTotal={data.expensesTotal}
              typesPercentage={data.typesPercentage}
              investimentsTotal={data.investimentsTotal}
            />
            <ExpensesByCategory expenses={data.totalExpensePerCategory} />
          </div>
        </div>
        <LastTransactions lastTransactions={data.lastTransactions} />
      </div>
    </div>
  );
};

export default HomePage;
