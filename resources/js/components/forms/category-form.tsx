"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCategoryForm } from "@/hooks/use-category-form"
import { CloseDialogProp } from "@/types"
import { Slider } from "@/components/ui/slider"
import { CategoryFormData } from "@/lib/validations/category-schema"

export function CategoryForm({ closeDialog }: CloseDialogProp) {
    const { form, onSubmit, loading } = useCategoryForm();

    const handleFormSubmit = (data: CategoryFormData) => {
        try {
            onSubmit(data);
            closeDialog();
        } catch (error) {
            console.error('Form submission failed:', error);
        }
    };

    return (
        <Form { ...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Category" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the name of your category.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Colour</FormLabel>
                            <FormControl>
                                <div
                                  className="flex"
                                >
                                    <Slider defaultValue={[33]} max={360} step={1} onValueChange={(val) => field.onChange(val[0])} />
                                <div
                                  className="h-8 w-8 mx-2 rounded-md border shadow"
                                  style={{ backgroundColor: `oklch(66% 0.19 ${field.value})` }}
                                />
                                </div>
                            </FormControl>
                            <FormDescription>
                                A colour for your category.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="icon"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Icon</FormLabel>
                            <FormControl>
                                <Input placeholder="Icon" {...field} />
                            </FormControl>
                            <FormDescription>
                                An icon for your category.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading}>Submit</Button>
            </form>
        </Form>
    )
}
