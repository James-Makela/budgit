import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { convertToCurrency } from '@/utils/formatting';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ total_yearly_costs, total_yearly_income }: { total_yearly_costs: string, total_yearly_income: string }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Card className="@container/card h-full p-8">
                        <CardHeader className="relative">
                            <CardDescription>Total Yearly Costs:</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                { convertToCurrency(total_yearly_costs) }
                            </CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className="@container/card h-full p-8">
                        <CardHeader className="relative">
                            <CardDescription>Total Yearly Income:</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                { convertToCurrency(total_yearly_income) }
                            </CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className="@container/card h-full p-8">
                        <CardHeader className="relative">
                            <CardDescription>Total Yearly Savings:</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                { convertToCurrency(total_yearly_income - total_yearly_costs) }
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
