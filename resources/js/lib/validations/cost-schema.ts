import { z } from "zod";
import { nameSchema, amountSchema } from "./rules";

export const costSchema = z.object({
    name: nameSchema,
    amount_cents: amountSchema,
    frequency_id: z.number({
        required_error: "Frequency is required",
        invalid_type_error: "Frequency must be selected",
    }),
    category_id: z.number({
        required_error: "Category is required",
        invalid_type_error: "Category must be selected",
    }),
    first_payment: z
        .string()
        .optional()
        .nullable()
        .refine(
            (val) => !val || !isNaN(Date.parse(val)),
            "First payment must be a valid date"
        ),
});
