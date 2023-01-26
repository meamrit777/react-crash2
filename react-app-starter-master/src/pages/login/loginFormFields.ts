import { EmailInput, PasswordInput } from '../../components/forms/FormInputComponent';
import { FormFieldsProps } from '../../interfaces/interface';
import { emailValidator, passwordValidator } from '../../validator/validator';

const logInformFields: FormFieldsProps[] = [
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        required: true,
        component: EmailInput,
        validator: emailValidator,
    },
    {
        label: 'password',
        name: 'password',
        required: true,
        component: PasswordInput,
        validator: passwordValidator,
    },
];

export default logInformFields;
