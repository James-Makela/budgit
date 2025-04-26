"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"; // Shadcn UI import
import { Input } from "../ui/input"; // Shandcn UI Input
import { FieldValues, UseFormReturn, Path } from "react-hook-form";

type TextInputProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
};

const moneyFormatter = Intl.NumberFormat("en-AU", {
  currency: "AUD",
  currencyDisplay: "symbol",
  currencySign: "standard",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function MoneyInput<T extends FieldValues>({ form, name, label, placeholder }: TextInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const format = (value: number | string) => {
          const numeric = typeof value === "string" ? Number(value) : value;
          return moneyFormatter.format(numeric / 100);
        };

        const parse = (formatted: string) => {
          const digits = formatted.replace(/\D/g, "");
          return Number(digits); // Keep as cents (integer)
        };

        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                type="text"
                value={format(field.value ?? 0)}
                onChange={(e) => field.onChange(parse(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export { MoneyInput }
