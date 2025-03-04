"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Cost = {
  id: string
  name: string
  amount: string
  yearly_cost: string
  amount_per_budget: string
  category: string
  frequency: string
}

export const columns: ColumnDef<Cost>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-right">Name</div>,
    cell: ({ row }) => {
        return <div className="text-right">{row.getValue("name")}</div>
    }
  },
  {
      accessorKey: "frequency",
      header: () => <div className="text-right">Frequency</div>,
      cell: ({ row }) => {
          return <div className="text-right">{row.getValue("frequency")}</div>
      }
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
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
    accessorKey: "yearly_cost",
    header: () => <div className="text-right">Amount (per year)</div>,
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("yearly_cost"));
        const formatted = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-right">Category</div>,
    cell: ({ row }) => {
        return <div className="text-right">{row.getValue("category")}</div>
    },
  },
  {
      accessorKey: "id",
      header: () => <div hidden></div>,
      cell: () => <div hidden></div>,
  },
]

