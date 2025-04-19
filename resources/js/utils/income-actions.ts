import { Income } from "@/types";
import { router } from "@inertiajs/react"

function addIncome(data: Income, options?: Parameters<typeof router.post>[2]) {
    router.post('/income', data, options);
}

function deleteIncome(id: string) {
    router.delete(`/income/${id}`, {
        onSuccess: () => console.log("Income deleted successfully."),
        onError: (errors) => alert(`Deleting income failed: ${errors}`),
    });
}

export {
    deleteIncome,
    addIncome,
}
