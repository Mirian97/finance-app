import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { formatMoney } from "@/app/_helpers/formatMoney";
import { cn } from "@/app/_lib/utils";
import { ComponentProps, ReactNode } from "react";

interface SummaryCardProps extends ComponentProps<"div"> {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}
const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
  className,
}: SummaryCardProps) => {
  return (
    <Card className={cn("gap-3 rounded-2xl", className)}>
      <CardHeader className="flex-row items-center gap-4 space-y-0 pb-3">
        <div className="rounded-lg bg-white bg-opacity-5 p-3">{icon}</div>
        <p
          className={cn(
            "text-sm font-semibold",
            size === "small"
              ? "text-muted-foreground"
              : "text-white opacity-70",
          )}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={cn(
            "font-bold",
            size === "small" ? "text-2xl" : "text-4xl",
          )}
        >
          {formatMoney(amount)}
        </p>
        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};
export default SummaryCard;
