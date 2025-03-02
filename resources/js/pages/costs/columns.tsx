"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CostColumn = {
  name: string
  amount_cents: number
  category_id: string
}

export const columns: ColumnDef<CostColumn>[] = [
  {
    accessorKey: "name",
    header: "ID",
  },
  {
    accessorKey: "amount_cents",
    header: "Amount",
    cell: ({ row }) => {
        console.log(row)
        const amount = parseFloat(row.getValue("amount_cents") / 100);
        const formatted = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "category.name",
    header: "Category",
  },
]

