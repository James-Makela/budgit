import { useForm } from "react-hook-form";
import { addIncome } from "@/utils/income-actions";
import { useState } from "react";
import { IncomeFormData, incomeSchema } from "@/lib/validations/income-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useIncomeForm(onSuccess?: () => void) {
    const form = useForm<IncomeFormData>({
        resolver: zodResolver(incomeSchema),
        defaultValues: {
            source: "",
        },
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data: IncomeFormData) => {
        setLoading(true);

        addIncome(data, {
            onSuccess: () => {
                form.reset();
                onSuccess?.();
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, messages]) => {
                    form.setError(field as keyof IncomeFormData, {
                        type: 'server',
                        message: (messages as string),
                    });
                });
            },
            onFinish: () => setLoading(false),
        });
    };

    return { form, onSubmit, loading };
}
