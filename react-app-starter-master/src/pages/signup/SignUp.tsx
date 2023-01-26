import React from 'react';
import { matchPassword } from '../../components/forms/FormInputComponent';
import KendoForm, { submitProps } from '../../components/forms/KendoForm';
import SignUpformFields from './SignUpFormFields';

const SignUp = () => {
    // const handleSubmit = (formData: submitProps) => alert(JSON.stringify(formData, null, 2));
    const handleSubmit = (formData: submitProps) => {
        return matchPassword(formData);
    };
    return (
        <KendoForm buttonLabel="Sign Up" title="Sign Up" formFields={SignUpformFields} handleSubmit={handleSubmit} />
    );
};

export default SignUp;
