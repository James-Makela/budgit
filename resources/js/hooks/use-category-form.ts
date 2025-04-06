import { useForm } from "react-hook-form";
import { addCategory } from "@/utils/category-actions";
import { useState } from "react";
import { Category } from "@/types";

export function useCategoryForm() {
    const form = useForm({
        defaultValues: {
            // TODO: default values here
            name: "",
        },
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: Category) => {
        setLoading(true);

        try {
            await addCategory(data);
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
