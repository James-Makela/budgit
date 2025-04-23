import { useState } from 'react';
import { Income, type BreadcrumbItem } from '@/types';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import AppLayout from '@/layouts/app-layout';
import { Card } from '@/components/ui/card';
import { Head } from '@inertiajs/react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { IncomeForm } from '@/components/forms/income-form'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Income',
        href: '/income',
    },
];

export default function Incomes({ income }: { income: Income[] }) {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleDialogStateChange = (open: boolean) => {
        setDialogOpen(open);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <script> Console.log(income); </script>
            <Card className='p-4 m-4 z-50'>
                <div>Here are your income details.</div>
                <Dialog open={isDialogOpen} onOpenChange={handleDialogStateChange}>
                    <DialogTrigger asChild>
                        <Button>Add Income</Button>
                    </DialogTrigger>
                    <DialogContent className='w-100 p-4 m-4'>
                        <IncomeForm closeDialog={() => setDialogOpen(false)}/>
                    </DialogContent>
                </Dialog>
            </Card>
            <Head title='Income' />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                <DataTable columns={columns} data={income}></DataTable>
                </div>
            </div>
        </AppLayout>
    )
}
