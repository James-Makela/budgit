import { Cost } from "@/types";
import { router } from "@inertiajs/react"

async function addCost(data: Cost) {
    return new Promise((resolve, reject) => {
        router.post('/costs', data, {
            preserveScroll: true,
            onSuccess: () => resolve(true),
            onError: (errors) => reject(errors),
        });
    });
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
