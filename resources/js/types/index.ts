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

export interface ClosePopoverProp {
    closePopover: () => void;
}

export type Cost = {
    id: string
    name: string
    amount_cents: number
    yearly_cost: number
    amount_per_budget: number
    category_id: number
    category_color: string
    frequency_id: number
}

export type Income = {
    id: string
    source: string
    person: string
    income_cents: number
    frequency_id: string
}

export type Category = {
    id: string
    name: string
    color: number
    icon: string
}

export type FormErrorResponse = {
    [key: string]: string[]; // Field name as key, array of error messages as values
};
