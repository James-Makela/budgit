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
import CollectionSelect from "../collection-select"
import { useTransactionForm } from "@/hooks/use-transaction-form"
import { TransactionFormProps } from "@/types"
import { TransactionFormData } from "@/lib/validations/transaction-schema"
import { useEffect, useState } from "react"
import { DatePicker } from "@/components/ui/date-picker"
import { Input } from "../ui/input"
import { MoneyInput } from "../ui/money-input"

export function TransactionForm({ mode, transactionData, closeDialog }: TransactionFormProps) {
    const { form, onSubmit, loading } = useTransactionForm();
    const [formLoaded, setFormLoaded ] = useState(false);

    useEffect(() => {
        if (mode === "edit" && transactionData && formLoaded) {
            form.reset({
                id: transactionData.id,
                description: transactionData.description,
                credit_cents: transactionData.credit_cents,
                debit_cents: transactionData.debit_cents,
                balance_cents: transactionData.balance_cents,
                category_id: transactionData.category_id,
            });
        }
    }, [mode, transactionData, form, formLoaded]);

    const handleFormSubmit = (data: TransactionFormData) => {
        onSubmit(data, mode);
        closeDialog();
    };

    return (
        <Form { ...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Transaction Date</FormLabel>
                            <FormControl>
                                <DatePicker
                                    selected={field.value}
                                    onSelect={(date: Date | undefined) => field.onChange(date)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Description" {...field} />
                            </FormControl>
                            <FormDescription>
                                The description of your transaction
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="credit_cents"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <MoneyInput form={form} label="Credit Amount" placeholder="$0.00" {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="debit_cents"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <MoneyInput form={form} label="Debit Amount" placeholder="$0.00" {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="balance_cents"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <MoneyInput form={form} label="Balance" placeholder="$0.00" {...field} />
                            </FormControl>
                            <FormDescription>
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
                            <FormLabel>Transaction Category</FormLabel>
                            <FormControl>
                                <CollectionSelect
                                    value={field.value}
                                    collectionLocation="/api/categories"
                                    placeholder = "Transaction"
                                    onChange={field.onChange}
                                    onLoaded={() => {
                                        setFormLoaded(true)
                                    }}
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
