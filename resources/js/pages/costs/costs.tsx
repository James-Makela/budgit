import React, { useState } from "react";
import { columns } from "./columns";
import { DataTable } from '@/components/ui/data-table';
import AppLayout from '@/layouts/app-layout';
import { Card } from '@/components/ui/card';
import { Cost, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { CostForm } from "@/components/forms/cost-form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Costs',
        href: '/costs',
    },
];

export default function Costs({ costs }: { costs: Cost[] }) {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleDialogStateChange = (open: boolean) => {
        setDialogOpen(open);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Card className="p-4 m-4 mb-0 z-50">
                <div>Here are all your costs over a year</div>
                <Dialog open={isDialogOpen} onOpenChange={handleDialogStateChange}>
                    <DialogTrigger asChild>
                        <Button>Add Cost</Button>
                    </DialogTrigger>
                    <DialogContent className="w-100 p-4 m-4">
                        <CostForm closeDialog={() => setDialogOpen(false)} />
                    </DialogContent>
                </Dialog>
            </Card>
            <Head title="Costs" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                <DataTable columns={columns} data={costs}></DataTable>
                </div>
            </div>
        </AppLayout>
    );
}
