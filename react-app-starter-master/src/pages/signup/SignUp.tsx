import { Button } from '@progress/kendo-react-buttons';
import React from 'react';
import { Link } from 'react-router-dom';
import { matchPassword } from '../../components/forms/FormInputComponent';
import KendoForm, { submitProps } from '../../components/forms/KendoForm';
import SignUpformFields from './SignUpFormFields';

const SignUp = () => {
    // const handleSubmit = (formData: submitProps) => alert(JSON.stringify(formData, null, 2));
    const handleSubmit = (formData: submitProps) => {
        return matchPassword(formData);
    };
    return (
        <>
            <KendoForm
                buttonLabel="Sign Up"
                title="Sign Up"
                formFields={SignUpformFields}
                handleSubmit={handleSubmit}
            />
            <div>
                Already have an account ?
                <Link style={{ textDecoration: 'none' }} to="/login">
                    <Button fillMode={'flat'}>Login</Button>
                </Link>
            </div>
        </>
    );
};

export default SignUp;
