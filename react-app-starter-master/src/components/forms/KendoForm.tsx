import { Button } from '@progress/kendo-react-buttons';
import { Field, Form, FormElement } from '@progress/kendo-react-form';
import React from 'react';
import { Link } from 'react-router-dom';

interface FormProps {
    formFields: Array<any>;
    title: string;
    buttonLabel: string;
    handleSubmit: (formData: submitProps) => any;
}
export interface submitProps {
    formData: Array<any>;
}

const KendoForm = ({ buttonLabel, title, formFields, handleSubmit }: FormProps) => {
    return (
        <div className="form">
            <Form
                onSubmit={handleSubmit}
                render={() => (
                    <FormElement style={{ minWidth: 350 }}>
                        <fieldset className={'k-form-fieldset'}>
                            <legend className={'k-form-legend'}>{title}</legend>
                            {formFields.map((field, index) => (
                                <div key={index} className="mb-3">
                                    <Field
                                        label={field.label}
                                        name={field.name}
                                        component={field.component}
                                        type={field.type}
                                        validator={field.validator}
                                        required={field.required}
                                    />
                                </div>
                            ))}
                        </fieldset>
                        <div className="k-form-buttons">
                            <Button themeColor={'primary'} type={'submit'}>
                                {buttonLabel}
                            </Button>
                            {title === 'Log In' ? (
                                <div>
                                    Don't have an account ?
                                    <Link style={{ textDecoration: 'none' }} to="/signup">
                                        <Button fillMode={'flat'}>Signup</Button>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    Already have an account ?
                                    <Link style={{ textDecoration: 'none' }} to="/login">
                                        <Button fillMode={'flat'}>Login</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </FormElement>
                )}
            />
        </div>
    );
};

export default KendoForm;
