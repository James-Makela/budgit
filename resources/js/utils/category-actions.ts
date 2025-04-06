import { Category } from "@/types";
import { router } from "@inertiajs/react"

async function addCategory(data: Category) {
    return new Promise((resolve, reject) => {
        router.post('/categories', data, {
            preserveScroll: true,
            onSuccess: () => resolve(true),
            onError: (errors) => reject(errors),
        });
    });
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
