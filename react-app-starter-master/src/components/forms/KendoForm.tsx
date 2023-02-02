import { Button } from '@progress/kendo-react-buttons';
import { Field, Form, FormElement } from '@progress/kendo-react-form';
import React from 'react';

interface FormProps {
    formFields: Array<any>;
    title: string;
    buttonLabel: string;
    handleSubmit: (formData: submitProps) => any;
    disabled?: boolean
}
export interface submitProps {
    formData: Array<any>;
}

const KendoForm = ({ buttonLabel, title, formFields, handleSubmit, disabled }: FormProps) => {
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
                                        disabled={disabled}
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
                            <Button themeColor={disabled ? 'secondary' : 'primary'} type={'submit'} disabled={disabled}>
                                {buttonLabel}
                            </Button>
                        </div>
                    </FormElement>
                )}
            />
        </div>
    );
};

export default KendoForm;
