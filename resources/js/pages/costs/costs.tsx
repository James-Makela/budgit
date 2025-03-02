import {Cost, columns} from "./columns";
import { DataTable } from '@/components/ui/data-table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Costs',
        href: '/costs',
    },
];

export default function Costs({ costs }) {
    console.log(costs);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Costs" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                <DataTable columns={columns} data={costs}></DataTable>
                </div>
            </div>
        </AppLayout>
    );
}
