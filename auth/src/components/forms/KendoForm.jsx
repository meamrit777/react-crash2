import PropTypes from "prop-types";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

const KendoForm = ({ buttonLabel, title, formFields }) => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <FormElement
          style={{
            maxWidth: 650,
          }}
        >
          <fieldset className={"k-form-fieldset"}>
            <legend className={"k-form-legend"}>{title}</legend>
            {formFields.map((field, index) => (
              <div key={index} className="mb-3">
                <Field
                  label={field.label}
                  name={field.name}
                  component={Input}
                  type={field.type}
                />
              </div>
            ))}
          </fieldset>
          <div className="k-form-buttons">
            <Button type={"submit"}>{buttonLabel}</Button>
          </div>
        </FormElement>
      )}
    />
  );
};

export default KendoForm;

KendoForm.propTypes = {
  formFields: PropTypes.array,
  onSubmit: PropTypes.func,
};
KendoForm.defaultProps = {
  formFields: [
    { label: "Email", name: "email", type: "email", required: true },
  ],
  onSubmit: () => {
    alert("handle sumbit clicked");
  },
};
// (
//     <div>
//       <p>{label}</p>
//       <Form onSubmit={handleSubmit}>
//         {formFields.map((field, index) => (
//           <div key={index}>
//             <FormLabel>{field.label}</FormLabel>
//             <FormInput
//               name={field.name}
//               type={field.type}
//               required={field.required}
//             />
//           </div>
//         ))}
//         <FormButtons>
//           <Button type="submit">Submit</Button>
//         </FormButtons>
//       </Form>
//     </div>
//   );
