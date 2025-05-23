"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { deleteCost } from "@/utils/cost-actions"
import { ArrowUpDown } from "lucide-react"
import { TrashIcon, PencilIcon } from "lucide-react"
import { Cost } from "@/types"
import { convertToCurrency } from "@/utils/formatting"

export const getCostColumns = (
    onEdit: (cost: Cost) => void
): ColumnDef<Cost>[] => [
    {
        accessorKey: "name",
        header: () => <div className="text-right">Name</div>,
        cell: ({ row }) => {
            return <div className="text-right">{row.getValue("name")}</div>
        }
    },
    {
        accessorKey: "amount_cents",
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
            const formatted = convertToCurrency(row.getValue("amount_cents"));
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
            const formatted = convertToCurrency(row.getValue("yearly_cost"));
            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "category",
        header: () => <div className="text-right">Category</div>,
        cell: ({ row }) => {
            const category_color: string = row.original.category_color || "#9E9E9E";
            return <div className="flex justify-end items-center">
                <Badge
                    variant="outline"
                    className="justify-center font-bold font-"
                    style={{ backgroundColor: `oklch(66% 0.19 ${category_color})` }}
                >
                    {row.getValue("category")}
                </Badge>
            </div>
        },
    },
    {
        accessorKey: "id",
        header: () => <div hidden></div>,
        cell: ({ row }) => {
            return  <div className="flex justify-end gap-1">
                <Button
                    onClick={() => deleteCost(row.getValue('id'))}
                    variant={"destructiveHidden"}
                    size={"icon"}
                >
                    <TrashIcon/>
                </Button>
                <Button
                    onClick={() => {
                        onEdit(row.original);
                    }}

                    variant={"ghost"}
                    size={"icon"}
                >
                    <PencilIcon/>
                </Button>
            </div>
        }
    },
]

