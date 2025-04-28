import { useForm } from "react-hook-form";
import { addTransaction, updateTransaction } from "@/utils/transaction-actions";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionFormData, transactionSchema } from "@/lib/validations/transaction-schema";
import { FormMode } from "@/types";

export function useTransactionForm() {
    const form = useForm<TransactionFormData>({
        resolver: zodResolver(transactionSchema),
        defaultValues: {
            id: undefined,
            date: undefined,
        },
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data: TransactionFormData, mode: FormMode) => {
        console.log("Submitting cost:", data);
        setLoading(true);

        try {
            if (mode === "edit" && data.id) {
                console.log("Updating Transaction");
                updateTransaction(data.id, data);
            } else {
                addTransaction(data);
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return { form, onSubmit, loading };
}
