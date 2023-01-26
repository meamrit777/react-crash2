import KendoForm from "../components/forms/KendoForm";

const LogInformFields = [
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
export const LogIn = (props) => {
  const handleSubmit = (input) => {
    console.log("input", input);
  };
  return (
    <KendoForm
      buttonLabel="Log In"
      title="Log In"
      onSubmit={handleSubmit}
      formFields={LogInformFields}
    />
  );
};
