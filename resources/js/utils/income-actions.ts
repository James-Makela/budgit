import { router } from "@inertiajs/react"

export const deleteIncome = (id: string) => {
    router.delete(`/income/${id}`, {
        onSuccess: () => console.log("Income deleted successfully."),
        onError: (errors) => alert(`Deleting income failed: ${errors}`),
    });
};
