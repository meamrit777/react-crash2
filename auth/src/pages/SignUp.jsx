import KendoForm from "../components/forms/KendoForm";

const SignUpformFields = [
  {
    label: "Name",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    label: "password",
    name: "password",
    type: "password",
    required: true,
  },
];

export const SignUp = (props) => {
  const handleSubmit = (input) => {
    console.log(input);
  };

  return (
    <KendoForm
      buttonLabel="Sign Up"
      title="Sign Up"
      onSubmit={handleSubmit}
      formFields={SignUpformFields}
    />
  );
};
