"use client"

import { MoneyInput } from "@/components/ui/money-input"
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
import CollectionSelect from "../collection-select"
import { useCostForm } from "@/hooks/use-cost-form"
import { CloseDialogProp, Cost } from "@/types"

export function CostForm({ closeDialog }: CloseDialogProp) {
    const { form, onSubmit, loading } = useCostForm();

    const handleFormSubmit = (data: Cost) => {
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
                            <FormLabel>Cost Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Cost" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the name of your cost.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="amount_cents"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <MoneyInput form={form} label="Cost Amount" placeholder="$0.00" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the amount of your cost.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="frequency_id"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Frequency</FormLabel>
                            <FormControl>
                                <CollectionSelect
                                    value={field.value}
                                    collectionLocation="/api/frequencies"
                                    placeholder="Frequency"
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormDescription>
                                How often do you need to pay this cost?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="category_id"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cost Category</FormLabel>
                            <FormControl>
                                <CollectionSelect
                                    value={field.value}
                                    collectionLocation="/api/categories"
                                    placeholder = "Category"
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormDescription>
                                What category does your cost fit into?
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
