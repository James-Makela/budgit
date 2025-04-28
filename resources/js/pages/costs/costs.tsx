import { useState } from "react";
import { getCostColumns } from "./columns";
import { DataTable } from '@/components/ui/data-table';
import AppLayout from '@/layouts/app-layout';
import { Card } from '@/components/ui/card';
import { Cost, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { CostForm } from "@/components/forms/cost-form";
import FormDialog from "@/components/form-dialog";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Costs',
        href: '/costs',
    },
];

export default function Costs({ costs }: { costs: Cost[] }) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("Add Cost");
    const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
    const [costToEdit, setCostToEdit] = useState<Cost | null>(null);

    const handleDialogStateChange = (open: boolean) => {
        setDialogOpen(open);
    };

    const handleEditClick = (cost: Cost) => {
        setDialogTitle("Edit Cost");
        setFormMode("edit");
        setCostToEdit(cost);
        setDialogOpen(true);
    };

    const columns = getCostColumns(handleEditClick);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Card className="p-4 m-4 mb-0 z-50">
                <div>Here are all your costs over a year</div>
                <Button
                    onClick={() => {
                        setFormMode("create");
                        setCostToEdit(null);
                        setDialogOpen(true);
                    }}
                >Add Cost</Button>
                <FormDialog open={isDialogOpen} onOpenChange={handleDialogStateChange} title={dialogTitle} description="Form to enter a new cost" >
                    <CostForm
                        mode={formMode}
                        costData={costToEdit ?? undefined}
                        closeDialog={() => setDialogOpen(false)}
                    />
                </FormDialog>
            </Card>
            <Head title="Costs" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                <DataTable columns={columns} data={costs} selectable={false}></DataTable>
                </div>
            </div>
        </AppLayout>
    );
}
