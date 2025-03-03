"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Cost = {
  id: string
  name: string
  amount: string
  amount_per_budget: string
  category: string
  frequency: string
}

export const columns: ColumnDef<Cost>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
      accessorKey: "frequency",
      header: "Frequency",
  },
  {
    accessorKey: "amount_per_budget",
    header: () => <div className="text-right">Amount (per budget)</div>,
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount_per_budget"));
        const formatted = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount (per year)</div>,
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
]

