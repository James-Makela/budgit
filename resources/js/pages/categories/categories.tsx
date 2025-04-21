import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types"
import { Head } from "@inertiajs/react";
import { CategoryForm } from "@/components/forms/category-form";
import { RowSelectionState } from "@tanstack/react-table";
import React, { useState } from "react";
import { Category } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

export default function Categories({ categories }: { categories: Category[] }) {
    const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
    const [isPopoverOpen, setPopoverOpen] = useState(false);

    const handlePopoverStateChange = (open: boolean) => {
        setPopoverOpen(open);
    };

    // To get the selected category ID
    const selectedRowId = Object.keys(rowSelection);
    const selectedCategory = selectedRowId.length > 0 ? categories[parseInt(selectedRowId[0])] : null;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <script> console.log(categories); </script>
            <Card className="p-4 m-4 z-50">
                <div>Here is where you can add and edit your categories.</div>
                <Popover open={isPopoverOpen} onOpenChange={handlePopoverStateChange}>
                    <PopoverTrigger asChild>
                        <Button>Add Category</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-100 p-4 m-4">
                            <CategoryForm closePopover={() => setPopoverOpen(false)} />
                    </PopoverContent>
                </Popover>
            </Card>
            <Head title="Categories" />
            <div className="flex h-full">
                <div className="flex h-full w-1/2 flex-1 flec-col gap-4 rounded-xl p-4 pr-2">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                        <DataTable
                            columns={columns}
                            data={categories}
                            selectable={true}
                            rowSelection={rowSelection}
                            setRowSelection={setRowSelection}>
                        </DataTable>
                    </div>
                </div>
                <div className="flex h-full w-1/2 flex-1 flec-col gap-4 rounded-xl p-4 pl-2">
                        <Card className="h-full w-full p-0 overflow-hidden">
                            <h2 className="text-3xl font-bold p-4 m-0"
                                style={{ backgroundColor: `oklch(55% 0.35 ${selectedCategory?.color})`}}
                            >
                                { selectedCategory?.name }
                            </h2>
                            <div className="p-8">
                                <p>ID: {selectedCategory?.id}</p>
                                <p>Name: {selectedCategory?.name}</p>
                            </div>
                        </Card>
                </div>
            </div>
        </AppLayout>
    );
}
