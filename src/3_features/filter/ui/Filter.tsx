import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@ui/shadcn/select.tsx";
import type { IFilterProps } from "@features/filter/ui/Filter.props.ts";
import { useCallback } from "react";

export const Filter = ({
    label,
    value,
    placeholder,
    options,
    onChange,
}: IFilterProps) => {

    const handleChange = useCallback(
        (val: string) => {
            onChange(val === "All" ? "" : val);
        },
        [onChange]
    );

    return (
        <Select value={value || "All"} onValueChange={handleChange}>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            className="font-bold"
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
