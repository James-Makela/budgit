import { useForm } from "react-hook-form";
import { addCost } from "@/utils/cost-actions";
import { useState } from "react";
import { Cost } from "@/types";

export function useCostForm() {
    const form = useForm({
        defaultValues: {
            name: "",
            amount_cents: 0,
        },
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: Cost) => {
        setLoading(true);

        try {
            await addCost(data);
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
                console.error("Unexpected error:", error);
            }
        } finally {
            setLoading(false);
        }
    };

    return { form, onSubmit, loading };
}
