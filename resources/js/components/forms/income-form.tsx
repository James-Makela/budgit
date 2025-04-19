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
import { ClosePopoverProp, Income } from "@/types"
import { useIncomeForm } from "@/hooks/use-income-form"

export function IncomeForm({ closePopover }: ClosePopoverProp) {
    const {form, onSubmit, loading } = useIncomeForm();

    const handleFormSubmit = (data: Income) => {
        try {
            onSubmit(data);
            closePopover();
        } catch (error) {
            console.error('Form submission failed:', error);
        }
    };

    return (
        <Form { ...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="source"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Source Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Source" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the name of your income source.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="person"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Person" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the person who brings in this income source.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="income_cents"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Income Amount</FormLabel>
                            <FormControl>
                                <MoneyInput form={form} label="Amount" placeholder="$0.00" {...field} />
                            </FormControl>
                            <FormDescription>
                                The amount of income bought in.
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
                                How often is this income paid?
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
