import { CostFormData } from '@/lib/validations/cost-schema';
import { TransactionFormData } from '@/lib/validations/transaction-schema';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    url: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface CloseDialogProp {
    closeDialog: () => void;
}

export type FormMode = "create" | "edit";

export type FormErrorResponse = {
    [key: string]: string[]; // Field name as key, array of error messages as values
};

export type Cost = {
    id: number
    name: string
    amount_cents: number
    yearly_cost: number
    amount_per_budget: number
    category_id: number
    category_color: string
    frequency_id: number
}

export type CostFormProps = {
    mode: FormMode;
    costData?: CostFormData;
    closeDialog: () => void;
}

export type Income = {
    id: number
    source: string
    person: string
    income_cents: number
    frequency_id: number
}

export type Category = {
    id: number
    name: string
    color: number
    icon: string
}

export type Transaction = {
    id: number
    date: Date
    description: string
    credit_cents: number
    debit_cents: number
    balance_cents: number
    is_processed: boolean
    category_id: number
    category_color: string
}

export type TransactionFormProps = {
    mode: FormMode;
    transactionData?: TransactionFormData;
    closeDialog: () => void;
}

