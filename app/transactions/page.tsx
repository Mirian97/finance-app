import AddTransactionButton from "../_components/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColums } from "./_columns";

const TransationsPage = async () => {
  const transactions = await db.transaction.findMany({});
  const serializedTransactions = transactions.map((transaction) => ({
    ...transaction,
    amount: transaction.amount.toNumber(),
  }));

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      {/* @ts-expect-error typing amount Decimal */}
      <DataTable columns={transactionColums} data={serializedTransactions} />
    </div>
  );
};

export default TransationsPage;
