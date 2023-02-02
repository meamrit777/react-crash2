import { Button } from '@progress/kendo-react-buttons';
import React from 'react';
import { Link } from 'react-router-dom';
import KendoForm, { submitProps } from '../../components/forms/KendoForm';
import logInformFields from './loginFormFields';

const LogIn = () => {
    const handleSubmit = (dataItem: submitProps) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <>
            <KendoForm formFields={logInformFields} buttonLabel="Log In" title="Log In" handleSubmit={handleSubmit} />
            <div>
                Don't have an account ?
                <Link style={{ textDecoration: 'none' }} to="/signup">
                    <Button fillMode={'flat'}>Signup</Button>
                </Link>
            </div>
        </>
    );
};

export default LogIn;
