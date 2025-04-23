import { z } from "zod";
import { colorSchema, nameSchema } from "./rules";


export const categorySchema = z.object({
    name: nameSchema,
    color: colorSchema,
    icon: z.string(),
})

export type CategoryFormData= z.infer<typeof categorySchema>;

