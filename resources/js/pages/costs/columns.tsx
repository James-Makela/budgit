"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Cost = {
  name: string
  formatted_amount_cents: string
  category_id: string
}

export const columns: ColumnDef<Cost>[] = [
  {
    accessorKey: "name",
    header: "ID",
  },
  {
    accessorKey: "formatted_amount_cents",
    header: "Amount",
  },
  {
    accessorKey: "category.name",
    header: "Category",
  },
]

