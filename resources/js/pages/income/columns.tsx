"use client"

import { Button } from "@/components/ui/button"
import { deleteIncome } from "@/utils/income-actions"
import { ColumnDef } from "@tanstack/react-table"
import { TrashIcon } from "lucide-react"
import { Income } from "@/types"

export const columns: ColumnDef<Income>[] = [
    {
        accessorKey: "source",
        header: () => <div className="text-right">Source</div>,
        cell: ({ row }) => {
            return <div className="text-right">{row.getValue("source")}</div>
        },
    },
    {
        accessorKey: "person",
        header: () => <div className="text-right">Source</div>,
        cell: ({ row }) => {
            return <div className="text-right">{row.getValue("person")}</div>
        },
    },
    {
        accessorKey: "income_cents",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("income_cents"));
            const formatted = new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
            }).format(amount);
            console.log(formatted);

            return <div className="text-right">{formatted}</div>
        },
    },
    {
        accessorKey: "id",
        header: () => <div hidden></div>,
        cell: ({ row }) => {
            return <div className="flex justify-end ml-8 mr-0">
                <Button
                    onClick={() => deleteIncome(row.getValue('id'))}
                    variant={"destructiveHidden"}
                    size={"icon"}
                >
                    <TrashIcon/>
                </Button>
            </div>
        }
    }
]
