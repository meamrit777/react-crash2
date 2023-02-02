import { Editor, EditorTools } from '@progress/kendo-react-editor';
import { FieldRenderProps } from '@progress/kendo-react-form';
import { Input, RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { Error, Label } from '@progress/kendo-react-labels';
import React, { useCallback, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
export const EmailInput = ({ validationMessage, visited, ...others }: FieldRenderProps) => {
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

export const PasswordInput = ({ validationMessage, visited, type, ...others }: FieldRenderProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
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
export const FeedbackRadio = (props: FieldRenderProps) => {
    console.log('props', props);
    const [feedbackType, setFeedbackType] = useState('comments');
    const handleChange = useCallback(
        (e: RadioButtonChangeEvent) => {
            setFeedbackType(e.value);
        },
        [setFeedbackType]
    );

    return (
        <div>
            <Label>Feedback Type</Label>
            <RadioButton
                name="comments"
                value="comments"
                checked={feedbackType === 'comments'}
                label="Comments "
                onChange={handleChange}
                disabled={props.disabled}
            />
            <RadioButton
                name="suggestions"
                value="suggestions"
                checked={feedbackType === 'suggestions'}
                label="Suggestions "
                disabled={props.disabled}
                onChange={handleChange}
            />
            <RadioButton
                name="questions"
                value="questions"
                checked={feedbackType === 'questions'}
                label="Questions "
                disabled={props.disabled}
                onChange={handleChange}
            />
        </div>
    );
};

const {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignRight,
    AlignCenter,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    Link,
    Unlink,
    FontSize,
    FontName,
    FormatBlock,
    ForeColor,
    BackColor,
    Subscript,
    Superscript,
    SelectAll,
    InsertImage,
    ViewHtml,
    InsertTable,
    InsertFile,
    Pdf,
    Print,
    AddRowBefore,
    AddRowAfter,
    AddColumnBefore,
    AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    MergeCells,
    SplitCell,
} = EditorTools;

const content = `
    <p>
        The KendoReact Editor allows your users to edit HTML in a familiar,
        follows accessibility standards, and provides API for content manipulation.
    </p>
`;
export const FormEditorInput = ({ onChange, disabled, ...others }: FieldRenderProps) => {
    const onChangeHandler = (event: any) => {
        onChange({ value: event.html });
    };

    console.log("disabled", disabled);
    return (
        <div>
            {disabled ?
                <Editor
                    tools={[[Bold, Italic, Underline],
                    [Undo, Redo],
                    [Link, Unlink],
                    [AlignLeft, AlignCenter, AlignRight],
                    [OrderedList, UnorderedList, Indent, Outdent],
                    ]}
                    contentStyle={{ height: 145 }}
                    value=""
                /> : <Editor
                    onChange={onChangeHandler}
                    tools={[[Bold, Italic, Underline],
                    [Undo, Redo],
                    [Link, Unlink],
                    [AlignLeft, AlignCenter, AlignRight],
                    [OrderedList, UnorderedList, Indent, Outdent],
                    ]}
                    contentStyle={{ height: 145 }}
                />}

        </div>
    );
};
export const FullNameInput = ({ validationMessage, visited, ...others }: FieldRenderProps) => {
    return (
        <div>
            <Input {...others} />
        </div>
    );
};