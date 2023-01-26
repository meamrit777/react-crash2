import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
export const EmailInput = (fieldRenderProps: any) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

export const PasswordInput = (fieldRenderProps: any) => {
    console.log(fieldRenderProps);
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    const { validationMessage, visited, type, ...others } = fieldRenderProps;
    return (
        <div>
            <div className="input-password">
                <Input {...others} type={showPassword ? 'text' : 'password'} />
                <a className="toggle-icon" onClick={togglePassword}>
                    {showPassword ? <FiEye className="togglecolor" /> : <FiEyeOff className="togglecolor" />}
                </a>
            </div>
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

export const matchPassword = (formData: any) => {
    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
    } else alert(JSON.stringify(formData, null, 2));
};
