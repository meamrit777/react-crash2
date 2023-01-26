import PropTypes from "prop-types";

const KendoForm = ({ onSubmit, formFields }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    formFields.map((field) => onSubmit(field.ref.current.value));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index}>
            <label>{field.label}</label>
            <input
              ref={field.ref}
              name={field.name}
              type={field.type}
              required={field.required}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
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
