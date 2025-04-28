import { TransactionFormData } from "@/lib/validations/transaction-schema";
import { router } from "@inertiajs/react"
import { format } from "date-fns";

function addTransaction(data: TransactionFormData, options?: Parameters<typeof router.post>[2]) {
    const payload = {
        ...data,
        date: data.date ? format(data.date, "yyyy-MM-dd") : undefined,
    };

    console.log(payload);

    router.post('/transactions', payload, options);
}

function deleteTransaction(id: string) {
    router.delete(`/transactions/${id}`, {
        onSuccess: () => console.log("Transaction deleted successfully."),
        onError: (errors) => alert(`Deleting transaction failed: ${errors}`),
    });
}

function updateTransaction(id: number, data: TransactionFormData, ) {
    router.put(`/transactions/${id}`, data, {
        onSuccess: () => console.log("Transaction changed successfully."),
        onError: (errors) => alert(`Changing transaction failed: ${errors}`),
    });
}

export {
    updateTransaction,
    deleteTransaction,
    addTransaction,
}
