"use client";
import { TransactionFormSchemaType } from "@/app/_actions/upsert-transaction/schema";
import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionButtonProps {
  transaction: TransactionFormSchemaType;
  transactionId: string;
}

const EditTransactionButton = ({
  transaction,
  transactionId,
}: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        dialogIsOpen={dialogIsOpen}
        setDialogIsOpen={setDialogIsOpen}
        defaultValues={transaction}
        transactionId={transactionId}
      />
    </>
  );
};

export default EditTransactionButton;
