"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { deleteTransaction } from "@/utils/transaction-actions"
import { TrashIcon, PencilIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Transaction } from "@/types"
import { convertToCurrency } from "@/utils/formatting"

export const getTransactionColumns = (
    onEdit: (transaction: Transaction) => void
): ColumnDef<Transaction>[] => [
    {
        accessorKey: "date",
        header: () => <div className="text-right">Date</div>,
        cell: ({ row }) => {
            return <div className="text-right font-medium">{row.getValue("date")}</div>
        },
    },
    {
        accessorKey: "description",
        header: () => <div className="text-right">Description</div>,
        cell: ({ row }) => {
            return <div className="text-right font-medium">{row.getValue("description")}</div>
        },
    },
    {
        accessorKey: "credit_cents",
        header: () => <div className="text-right">Credit Amount</div>,
        cell: ({ row }) => {
            const formatted = convertToCurrency(row.getValue("credit_cents"));
            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "debit_cents",
        header: () => <div className="text-right">Debit Amount</div>,
        cell: ({ row }) => {
            const formatted = convertToCurrency(row.getValue("debit_cents"));
            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "balance_cents",
        header: () => <div className="text-right">Balance Amount</div>,
        cell: ({ row }) => {
            const formatted = convertToCurrency(row.getValue("balance_cents"));
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
                    onClick={() => deleteTransaction(row.getValue('id'))}
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
