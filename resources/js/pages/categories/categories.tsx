import { type Category, columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types"
import { Head } from "@inertiajs/react";
import { CategoryForm } from "@/components/forms/category-form";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

export default function Categories({ categories }: {categories: Category[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <script> console.log(categories); </script>
            <Card className="p-4 m-4 z-50">
                <div>Here is where you can add and edit your categories.</div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button>Add Category</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-100 p-4 m-4">
                            <CategoryForm />
                    </PopoverContent>
                </Popover>
            </Card>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flec-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <DataTable columns={columns} data={categories}></DataTable>
                </div>
            </div>
        </AppLayout>
    );
}
