"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

const MONTH_OPTIONS = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const MonthSelect = () => {
  const { push } = useRouter();
  const params = useSearchParams();
  const month = params.get("month");
  const onMonthChange = (month: string) => push(`/?month=${month}`);

  return (
    <Select
      defaultValue={month ?? ""}
      onValueChange={(value) => onMonthChange(value)}
    >
      <SelectTrigger className="w-[160px] max-w-full break-keep rounded-full pl-4 pr-3 font-semibold">
        Selecione o Mês
      </SelectTrigger>
      <SelectContent>
        {MONTH_OPTIONS.map((month) => (
          <SelectItem key={month.value} value={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MonthSelect;
