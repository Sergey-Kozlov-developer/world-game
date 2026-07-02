export interface IFilterProps {
    label: string;
    value: string;
    placeholder: string;
    options: {value: string, label: string}[];
    onChange: (value: string) => void;
}