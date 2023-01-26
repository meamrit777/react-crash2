import React from 'react';
import KendoForm, { submitProps } from '../../components/forms/KendoForm';
import logInformFields from './loginFormFields';

const LogIn = () => {
    const handleSubmit = (dataItem: submitProps) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <>
            <KendoForm formFields={logInformFields} buttonLabel="Log In" title="Log In" handleSubmit={handleSubmit} />
        </>
    );
};

export default LogIn;
