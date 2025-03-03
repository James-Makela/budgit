import { useEffect, useState } from 'react';
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
    value: number;
    collectionLocation: string;
    placeholder: string;
    onChange: (value: number) => void;
}

const CategorySelect = ({ value, collectionLocation, placeholder, onChange }: CategorySelectProps) => {
    const [items, setItems] = useState<Category[]>([]);

    useEffect(() => {
        // fetch the data from the laravel backend
        axios.get(collectionLocation)
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                  console.error('Error fetching data:', error);
            });

    }, );

    return (
        <Select value={String(value)} onValueChange={(value) => onChange(Number(value))}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
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

