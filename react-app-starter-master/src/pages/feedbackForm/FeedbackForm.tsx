import { Button } from '@progress/kendo-react-buttons';
import React, { useState } from 'react';
import KendoForm, { submitProps } from '../../components/forms/KendoForm';
import feedbackFormFields from './feedbackFormFields';

const FeedBackForm = () => {
    const [disabled, setDisabled] = useState(true)
    const handleSubmit = (dataItem: submitProps) => console.log(dataItem);

    return (
        <div className='feedback_form'>
            <Button onClick={() => setDisabled(!disabled)}>{disabled ? "Edit" : "Cancel"}</Button>
            <KendoForm
                disabled={disabled}
                formFields={feedbackFormFields}
                buttonLabel="Submit"
                title="Feedback"
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default FeedBackForm;
