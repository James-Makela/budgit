import { Category } from "@/types";
import { router } from "@inertiajs/react"

async function addCategory(data: Category, options?: Parameters<typeof router.post>[2]) {
    router.post('/categories', data, options);
}

function deleteCategory(id: string) {
    router.delete(`/categories/${id}`, {
        onSuccess: () => console.log("Category deleted successfully."),
        onError: (errors) => alert(`Deleting category failed: ${errors}`),
    });
};

export {
    deleteCategory,
    addCategory,
}
