import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@ui/shadcn/select.tsx";

export const Filter = () => {
    return (
        <Select>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Filter</SelectLabel>
                    <SelectItem value='all' className='font-bold'>All</SelectItem>
                    <SelectItem value='genre'>Genre</SelectItem>
                    <SelectItem value='platform'>Platform</SelectItem>
                </SelectGroup>

            </SelectContent>
        </Select>
    );
};
