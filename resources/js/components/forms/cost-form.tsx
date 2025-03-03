"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import CategorySelect from "../category-select"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Cost name must be at least 2 characters.",
    }).max(50, {
        message: "Cost name must not exceed 50 characters.",
    }),
    cost: z.coerce.number().min(0.01, "Required"),
    frequency: z.number(),
    category: z.number(),
})

export function CostForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            cost: 0,
        },
        mode: "onTouched",
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values
        // This will be typesafe and validated
        console.log(values);
    }

    return (
        <Form { ...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cost Name</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
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
                    name="cost"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <MoneyInput form={form} label="Cost Amount" placeholder="$0.00" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the amnount of your cost.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="frequency"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Frequency</FormLabel>
                            <FormControl>
                                <CategorySelect
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
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cost Category</FormLabel>
                            <FormControl>
                                <CategorySelect
                                    value={field.value}
                                    collectionLocation="/api/categories"
                                    placeholder = "Category"
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormDescription>
                                This is the name of your cost.
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
