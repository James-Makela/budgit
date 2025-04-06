import React, { useState } from "react";
import { columns } from "./columns";
import { DataTable } from '@/components/ui/data-table';
import AppLayout from '@/layouts/app-layout';
import { Card } from '@/components/ui/card';
import { Cost, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CostForm } from "@/components/forms/cost-form";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Costs',
        href: '/costs',
    },
];

export default function Costs({ costs }: { costs: Cost[] }) {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handlePopoverStateChange = (open: boolean) => {
    setPopoverOpen(open);  // Update state when the popover opens or closes
  };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <script> console.log(costs); </script>
            <Card className="p-4 m-4 z-50">
                <div>Here are all your costs over a year</div>
                <Popover open={isPopoverOpen} onOpenChange={handlePopoverStateChange}>
                    <PopoverTrigger asChild>
                        <Button>Add Cost</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-100 p-4 m-4">
                        <CostForm closePopover={() => setPopoverOpen(false)} />
                    </PopoverContent>
                </Popover>
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
