import { z } from "zod";
import { amountSchema, nameSchema } from "./rules";


export const incomeSchema = z.object({
    source: nameSchema,
    person: nameSchema,
    income_cents: amountSchema,
    frequency_id: z.number({
        required_error: "Frequency is required",
        invalid_type_error: "Frequency must be selected",
    }),
})

export type IncomeFormData = z.infer<typeof incomeSchema>;
