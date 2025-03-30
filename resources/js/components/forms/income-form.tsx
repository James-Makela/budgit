"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"

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
import { router } from "@inertiajs/react"

const formSchema = z.object({
    source: z.string().min(2, {
        message: "Source name must be at least 2 characters.",
    }).max(50, {
        message: "Source name must not exceed 50 characters.",
    }),
    person: z.string().min(2, {
        message: "Person name must be at least 2 characters.",
    }).max(50, {
        message: "Person name must not exceed 50 characters.",
    }),
    income_cents: z.coerce.number().min(0.01, "Required"),
    frequency_id: z.number(),
})

export function IncomeForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            source: "",
            income_cents: 0,
        },
        mode: "onTouched",
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values
        // This will be typesafe and validated
        console.log(values);
        axios.post("/api/income", values)
            .then((response) => {
                console.log("Income saved:", response.data);
                router.visit("income")
            })
            .catch((error) => {
                console.error("Error saving income:", error.response?.data);
                alert("Failed to save income.")
            });
    }

    return (
        <Form { ...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
