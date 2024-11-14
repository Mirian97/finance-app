"use client";
import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full text-sm"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar Transação <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        dialogIsOpen={dialogIsOpen}
        setDialogIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
