import { z } from "zod";

export const transactionSchema = z.object({
    id: z.number().optional(),
    date: z.date({
        required_error: "Date is required",
        invalid_type_error: "Date must be selected"
    }),
    description: z.string(),
    credit_cents: z.number().optional(),
    debit_cents: z.number().optional(),
    balance_cents: z.number().optional(),
    category_id: z.number(),
});

export type TransactionFormData = z.infer<typeof transactionSchema>;
