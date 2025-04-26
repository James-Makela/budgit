import { CostFormData } from "@/lib/validations/cost-schema";
import { router } from "@inertiajs/react"

function addCost(data: CostFormData, options?: Parameters<typeof router.post>[2]) {
    router.post('/costs', data, options);
}

function deleteCost(id: string) {
    router.delete(`/costs/${id}`, {
        onSuccess: () => console.log("Cost deleted successfully."),
        onError: (errors) => alert(`Deleting cost failed: ${errors}`),
    });
}

function updateCost(id: number, data: CostFormData, ) {
    router.put(`/costs/${id}`, data, {
        onSuccess: () => console.log("Cost changed successfully."),
        onError: (errors) => alert(`Changing cost failed: ${errors}`),
    });
}

export {
    updateCost,
    deleteCost,
    addCost,
}
