export interface FormFieldsProps {
    label?: string;
    name: string;
    type?: string;
    required?: boolean;
    component: React.ElementType;
    validator?: any;
}
