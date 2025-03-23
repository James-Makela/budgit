"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Cost = {
  id: string
  name: string
  amount: string
  yearly_cost: string
  amount_per_budget: string
  category: string
  category_color: string
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
      accessorKey: "frequency",
      header: () => <div className="text-right">Frequency</div>,
      cell: ({ row }) => {
          return <div className="text-right">{row.getValue("frequency")}</div>
      }
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
        const category_color: string = row.getValue("category_color") || "#9E9E9E";
        return <div className="flex justify-end items-center">
          <Badge variant="outline" className="justify-center font-bold font-" style={{ backgroundColor: category_color }}>{row.getValue("category")}</Badge>
        </div>
    },
  },
  {
      accessorKey: "id",
      header: () => <div hidden></div>,
      cell: () => <div hidden></div>,
  },
  {
    accessorKey: "category_color",
    header: () => <div hidden></div>,
    cell: () => <div hidden></div>,
},
]

