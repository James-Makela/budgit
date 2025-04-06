import { useForm } from "react-hook-form";
import { addIncome } from "@/utils/income-actions";
import { useState } from "react";
import { Income } from "@/types";

export function useIncomeForm() {
    const form = useForm({
        defaultValues: {

        },
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: Income) => {
        setLoading(true);

        try {
            await addIncome(data);
            form.reset();
        } catch (error: any) {
            if (error.response?.status === 422) {
                const errors = error.response.data.errors;
                Object.keys(errors).forEach((field) => {
                    form.setError(field as any, {
                        type: "server",
                        message: errors[field][0],
                    });
                });
            } else {
                console.error("Unexpeted error:", error);
            }
        } finally {
            setLoading(false);
        }
    };

    return { form, onSubmit, loading };
}
