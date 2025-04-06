import { Income } from "@/types";
import { router } from "@inertiajs/react"

async function addIncome(data: Income) {
    return new Promise((resolve, reject) => {
        router.post('income', data, {
            preserveScroll: true,
            onSuccess: () => resolve(true),
            onError: (errors) => reject(errors),
        });
    });
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
