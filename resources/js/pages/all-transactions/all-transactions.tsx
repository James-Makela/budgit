import { useState } from "react";
import { BreadcrumbItem, Transaction } from "@/types";
import { getTransactionColumns } from "./columns";
import AppLayout from "@/layouts/app-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormDialog from "@/components/form-dialog";
import { TransactionForm } from "@/components/forms/transaction-form";
import { Head } from "@inertiajs/react";
import { DataTable } from "@/components/ui/data-table";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Transactions',
        href: '/transactions',
    },
];

export default function Transactions({ transactions }: { transactions: Transaction[] }) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("Add Transaction");
    const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
    const [transactionToEdit, setTransactionToEdit] = useState<Transaction | null>(null);

    const handleDialogStateChange = (open: boolean) => {
        setDialogOpen(open);
    };

    const handleEditClick = (transaction: Transaction) => {
        setDialogTitle("Edit Transaction");
        setFormMode("edit");
        setTransactionToEdit(transaction);
        setDialogOpen(true);
    };

    const columns = getTransactionColumns(handleEditClick);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Card className="p-4 m-4 mb-0 z-50">
                <div>Here are all your transactions</div>
                <Button
                    onClick={() => {
                        setFormMode("create");
                        setTransactionToEdit(null);
                        setDialogOpen(true);
                    }}
                >Add Transaction</Button>
                <FormDialog
                    open={isDialogOpen}
                    onOpenChange={handleDialogStateChange}
                    title={dialogTitle}
                    description="Form for adding a transaction">
                    <TransactionForm
                        mode={formMode}
                        transactionData={transactionToEdit ?? undefined}
                        closeDialog={() => setDialogOpen(false)}
                    />
                </FormDialog>
            </Card>
            <Head title="Transactions" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                <DataTable columns={columns} data={transactions} selectable={false}></DataTable>
                </div>
            </div>
        </AppLayout>
    );
}
