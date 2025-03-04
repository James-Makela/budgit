import { router } from "@inertiajs/react"

export const deleteCost = (id: string) => {
    router.delete(`/costs/${id}`, {
        onSuccess: () => console.log("Cost deleted successfully."),
        onError: (errors) => alert(`Deleting cost failed: ${errors}`),
    });
};
