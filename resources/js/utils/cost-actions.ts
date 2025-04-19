import { Cost } from "@/types";
import { router } from "@inertiajs/react"

function addCost(data: Cost, options?: Parameters<typeof router.post>[2]) {
    router.post('/costs', data, options);
}

function deleteCost(id: string) {
    router.delete(`/costs/${id}`, {
        onSuccess: () => console.log("Cost deleted successfully."),
        onError: (errors) => alert(`Deleting cost failed: ${errors}`),
    });
}

export {
    deleteCost,
    addCost,
}
