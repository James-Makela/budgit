import { router } from "@inertiajs/react"

export const deleteCategory = (id: string) => {
    router.delete(`/categories/${id}`, {
        onSuccess: () => console.log("Category deleted successfully."),
        onError: (errors) => alert(`Deleting category failed: ${errors}`),
    });
};
