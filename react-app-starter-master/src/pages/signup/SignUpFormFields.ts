import { Input } from '@progress/kendo-react-inputs';
import { EmailInput, PasswordInput } from '../../components/forms/FormInputComponent';
import { FormFieldsProps } from '../../interfaces/interface';
import { emailValidator, passwordValidator } from '../../validator/validator';

const SignUpformFields: FormFieldsProps[] = [
    {
        label: 'Name',
        name: 'name',
        component: Input,
        type: 'text',
        required: true,
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        required: true,
        component: EmailInput,
        validator: emailValidator,
    },
    {
        label: 'Password',
        name: 'password',
        required: true,
        component: PasswordInput,
        validator: passwordValidator,
    },
    {
        label: 'Confirm Password',
        name: 'confirmPassword',
        type: 'password',
        required: true,
        component: PasswordInput,
        validator: passwordValidator,
    },
];
export default SignUpformFields;
