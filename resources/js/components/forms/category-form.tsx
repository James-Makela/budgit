"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"

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
    name: z.string().min(2, {
        message: "Category name must be at least 2 characters.",
    }).max(50, {
        message: "Category name must not exceed 50 characters.",
    }),
    color: z.string().min(7).max(7),
    icon: z.string().min(2).max(50),
})

export function CategoryForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
        mode: "onTouched",
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values
        // This will be typesafe and validated
        console.log(values);
        axios.post("/api/costs", values)
            .then((response) => {
                console.log("Category saved:", response.data);
                router.visit("costs")
            })
            .catch((error) => {
                console.error("Error saving cost:", error.response?.data);
                alert("Failed to save cost.")
            });
    }

    return (
        <Form { ...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                <Input placeholder="Colour" {...field} />
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
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
