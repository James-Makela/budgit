import React, { useEffect, useState } from 'react';
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectContent,
} from '@/components/ui/select';
import axios from 'axios';

interface Category {
    id: number;
    name: string;
    color: string;
    icon: string;
}

interface CategorySelectProps {
    value: string;
    onChange: (value: string) => void;
}

const CategorySelect = ({ value, onChange }: CategorySelectProps) => {
    const [items, setItems] = useState<Category[]>([]);

    useEffect(() => {
        // fetch the data from the laravel backend
        axios.get('/api/categories')
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                  console.error('Error fetching categories:', error);
            });

    }, []);

    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
            {items.map((item) => (
                    <SelectItem key={item.id} value={String(item.id)}>
                        {item.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default CategorySelect

