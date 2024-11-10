import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColums } from "./_columns";

const TransationsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full text-sm">
          Adicionar Transação <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColums} data={transactions} />
    </div>
  );
};

export default TransationsPage;
