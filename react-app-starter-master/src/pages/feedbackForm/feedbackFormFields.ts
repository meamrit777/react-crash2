import { EmailInput, FeedbackRadio, FormEditorInput, FullNameInput } from '../../components/forms/FormInputComponent';
import { FormFieldsProps } from '../../interfaces/interface';
import { emailValidator } from '../../validator/validator';
const feedbackFormFields: FormFieldsProps[] = [
    {
        label: 'Feedback Type',
        name: 'feedback',
        component: FeedbackRadio,
    },
    {
        label: 'Description',
        name: 'description',
        component: FormEditorInput,
    },
    {
        label: 'Full Name',
        name: 'name',
        type: 'name',
        component: FullNameInput,
    },
    {
        label: 'E-mail',
        name: 'email',
        type: 'email',
        required: true,
        component: EmailInput,
        validator: emailValidator,
    },
];
export default feedbackFormFields;
