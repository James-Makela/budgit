import { router } from "@inertiajs/react"

function deleteCost(id: string) {
    router.delete(`/costs/${id}`, {
        onSuccess: () => console.log("Cost deleted successfully."),
        onError: (errors) => alert(`Deleting cost failed: ${errors}`),
    });
}

export {
    deleteCost,
}
