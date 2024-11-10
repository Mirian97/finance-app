import { Badge } from "@/app/_components/ui/badge";
import { TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TypeBadgeProps {
  transactionType: TransactionType;
}

const TypeBadge = ({ transactionType }: TypeBadgeProps) => {
  if (transactionType === "DEPOSIT") {
    return (
      <Badge className="hover bg-muted text-primary hover:bg-muted">
        <CircleIcon className="mr-1 size-2 fill-primary" />
        Ganho
      </Badge>
    );
  }
  if (transactionType === "EXPENSE") {
    return (
      <Badge className="bg-danger bg-opacity-10 text-danger hover:bg-danger hover:bg-opacity-10">
        <CircleIcon className="mr-1 size-2 fill-danger" />
        Gasto
      </Badge>
    );
  }
  return (
    <Badge className="bg-white bg-opacity-10 text-white hover:bg-white hover:bg-opacity-10">
      <CircleIcon className="mr-1 size-2 fill-white" />
      Investimento
    </Badge>
  );
};

export default TypeBadge;
