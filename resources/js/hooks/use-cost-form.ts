import { useForm } from "react-hook-form";
import { addCost } from "@/utils/cost-actions";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CostFormData, costSchema } from "@/lib/validations/cost-schema";

export function useCostForm(onSuccess?: () => void) {
    const form = useForm<CostFormData>({
        resolver: zodResolver(costSchema),
        defaultValues: {
            name: "",
        },
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data: CostFormData) => {
        console.log("Submitting cost:", data);
        setLoading(true);

        addCost(data, {
            onSuccess: () => {
                form.reset();
                onSuccess?.();
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, messages]) => {
                    form.setError(field as keyof CostFormData, {
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
