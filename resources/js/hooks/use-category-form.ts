import { useForm } from "react-hook-form";
import { addCategory } from "@/utils/category-actions";
import { useState } from "react";
import { CategoryFormData, categorySchema } from "@/lib/validations/category-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useCategoryForm(onSuccess?: () => void) {
    const form = useForm<CategoryFormData>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: "",
        },
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data: CategoryFormData) => {
        setLoading(true);
        console.log(data);


        addCategory(data, {
            onSuccess: () => {
                form.reset();
                onSuccess?.();
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, messages]) => {
                    form.setError(field as keyof CategoryFormData, {
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
