import { DashboardDataType } from "@/app/_data/get-dashboard";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

type SummaryListCardsProps = Pick<
  DashboardDataType,
  "balance" | "investimentsTotal" | "expensesTotal" | "depositsTotal"
>;

const SummaryListCards = async ({
  balance,
  investimentsTotal,
  depositsTotal,
  expensesTotal,
}: SummaryListCardsProps) => (
  <div className="space-y-6">
    <SummaryCard
      icon={<WalletIcon size={16} />}
      title="Saldo"
      amount={balance}
      size="large"
      className="bg-[#161716]"
    />
    <div className="grid grid-cols-3 gap-6">
      <SummaryCard
        icon={<PiggyBankIcon size={16} />}
        title="Investido"
        amount={investimentsTotal}
        className="bg-black/5"
      />
      <SummaryCard
        icon={<TrendingUpIcon size={16} className="text-primary" />}
        title="Receita"
        amount={depositsTotal}
      />
      <SummaryCard
        icon={<TrendingDownIcon size={16} className="text-red-500" />}
        title="Despesas"
        amount={expensesTotal}
      />
    </div>
  </div>
);

export default SummaryListCards;
