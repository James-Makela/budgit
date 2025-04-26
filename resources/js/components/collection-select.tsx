import { useEffect, useState } from 'react';
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectContent,
} from '@/components/ui/select';
import axios from 'axios';

interface Collection {
    id: number;
    name: string;
    color: string;
    icon: string;
}

interface CollectionSelectProps {
    value: number;
    collectionLocation: string;
    placeholder: string;
    onChange: (value: number) => void;
    onLoaded?: () => void;
}

const CollectionSelect = ({ value, collectionLocation, placeholder, onChange, onLoaded }: CollectionSelectProps) => {
    const [items, setItems] = useState<Collection[]>([]);

    useEffect(() => {
        // fetch the data from the laravel backend
        axios.get(collectionLocation)
            .then((response) => {
                setItems(response.data);
                onLoaded?.();
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, [collectionLocation, onLoaded]);

    return (
        <Select
            value={String(value)}
            onValueChange={(value) => onChange(Number(value))}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {items.map((item) => (
                    <SelectItem key={item.id} value={String(item.id)}>
                        {item.name}
                    </SelectItem>
                )
            )}
            </SelectContent>
        </Select>
    );
};

export default CollectionSelect

