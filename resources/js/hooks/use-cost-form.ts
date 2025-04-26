import { useForm } from "react-hook-form";
import { addCost, updateCost } from "@/utils/cost-actions";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CostFormData, costSchema } from "@/lib/validations/cost-schema";
import { FormMode } from "@/types";

export function useCostForm() {
    const form = useForm<CostFormData>({
        resolver: zodResolver(costSchema),
        defaultValues: {
            id: undefined,
            name: "",
            amount_cents: 0,
            frequency_id: undefined,
            category_id: undefined,
            first_payment: undefined,
        },
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data: CostFormData, mode: FormMode) => {
        console.log("Submitting cost:", data);
        setLoading(true);

        try {
            if (mode === "edit" && data.id) {
                console.log("Updating Cost");
                updateCost(data.id, data);
            } else {
                addCost(data);
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return { form, onSubmit, loading };
}
