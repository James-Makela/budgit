"use client";
import { useReducer } from "react";
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

// Brazilian currency config
const moneyFormatter = Intl.NumberFormat("en-AU", {
  currency: "AUD",
  currencyDisplay: "symbol",
  currencySign: "standard",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function MoneyInput<T extends FieldValues>({ form, name, label, placeholder}: TextInputProps<T>) {
  const initialValue = form.getValues()[name]
    ? moneyFormatter.format(form.getValues()[name])
    : "";

  const [value, setValue] = useReducer((_: string, next: string) => {
    const digits = next.replace(/\D/g, "");
    return moneyFormatter.format(Number(digits) / 100);
  }, initialValue);

  function handleChange(realChangeFn: (value: number) => void, formattedValue: string) {
    const digits = formattedValue.replace(/\D/g, "");
    const realValue = Number(digits) / 100;
    realChangeFn(realValue);
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const _change = field.onChange;

        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                type="text"
                {...field}
                onChange={(ev) => {
                  setValue(ev.target.value);
                  handleChange(_change, ev.target.value);
                }}
                value={value}
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
