"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { deleteCost } from "@/utils/cost-actions"
import { ArrowUpDown } from "lucide-react"
import { TrashIcon } from "lucide-react"
import { Cost } from "@/types"

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
    header: ({ column }) => {
      return (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
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
      cell: ({ row }) => {
        return  <div className="flex justify-end ml-8 mr-0">
          <Button onClick={() => deleteCost(row.getValue('id'))} className="bg-sidebar hover:bg-destructive/90 transition duration-500" variant={"destructive"} size={"icon"}><TrashIcon/></Button>
        </div>
      }
  },
  {
    accessorKey: "category_color",
    header: () => <div hidden></div>,
    cell: () => <div hidden></div>,
  },
]

