"use client"

import { Button } from "@/components/ui/button"
// import { TableCell } from "@/components/ui/table"
import { deleteCategory } from "@/utils/category-actions"
import { ColumnDef } from "@tanstack/react-table"
import { TrashIcon } from "lucide-react"
import { Category } from "@/types"

export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: "icon",
        header: () => <div className="text-right">Icon</div>,
    },
    {
        accessorKey: "name",
        header: () => <div className="text-right">Name</div>,
        cell: ({ row }) => {
            return <div className="text-right">{row.getValue("name")}</div>
        }
    },
    {
        accessorKey: "color",
        header: () => <div className="text-right">Colour</div>,
        cell: ({ row }) => {
            return <div className="flex justify-end">
                <div
                    className="w-5 h-5 rounded-full text-right mx-8"
                    style={{ backgroundColor: `oklch(66% 0.19 ${row.getValue("color")})` }}
                >
            </div>
            </div>
        }
    },
    {
        accessorKey: "id",
        header: () => <div className="text-right"></div>,
        cell: ({ row }) => {
            return  <div className="text-right">
                <Button
                    onClick={() => deleteCategory(row.getValue('id'))}
                    variant={"destructiveHidden"}
                    size={"icon"}
                >
                    <TrashIcon/>
                </Button>
            </div>
        }
    },
]

