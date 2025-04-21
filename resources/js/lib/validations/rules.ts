import { z } from "zod";

// Shared name rule (min 2 chars)
export const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(255, "Name must be 255 characters or fewer");

// Shared amount rule
export const amountSchema = z
  .number({
    required_error: "Amount is required",
    invalid_type_error: "Amount must be a number",
  })
  .min(0.01, "Amount must be greater than zero");

export const colorSchema = z
    .number()
    .min(0)
    .max(360);

