import { type BreadcrumbItem } from '@/types';
import { type Income, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import AppLayout from '@/layouts/app-layout';
import { Card } from '@/components/ui/card';
import { Head } from '@inertiajs/react';
import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from '@/components/ui/button';
import { PopoverContent } from '@/components/ui/popover';
import { IncomeForm } from '@/components/forms/income-form'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Income',
        href: '/income',
    },
];

export default function Income({ income }: { income: Income[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <script> Console.log(income); </script>
            <Card className='p-4 m-4 z-50'>
                <div>Here are your income details.</div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button>Add Income</Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-100 p-4 m-4'>
                        <IncomeForm />
                    </PopoverContent>
                </Popover>
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
