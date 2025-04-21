import { useForm } from "react-hook-form";
import { addIncome } from "@/utils/income-actions";
import { useState } from "react";
import { Income } from "@/types";
import { z } from "zod";
import { incomeSchema } from "@/lib/validations/income-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useIncomeForm(onSuccess?: () => void) {
    type IncomeFormData = z.infer<typeof incomeSchema>;

    const form = useForm<IncomeFormData>({
        resolver: zodResolver(incomeSchema),
        defaultValues: {
            source: "",
        },
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data: Income) => {
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
