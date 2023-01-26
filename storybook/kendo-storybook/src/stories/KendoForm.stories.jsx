import { KendoForm } from "../components/forms/KendoForm";

export default {
  title: "Example/KendoForm",
  component: KendoForm,
};
const Template = (args) => <KendoForm {...args} />;

export const SignUp = Template.bind({});
SignUp.args = {
  formfields: [
    { label: "Name", name: "name", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Password", name: "password", type: "password", required: true },
  ],
  onSubmit: () => {
    console.log("signup");
  },
};
export const LogIn = Template.bind({});
LogIn.args = {
  formfields: [
    { ref:"", label: "Email", name: "email", type: "email", required: true },
    { ref:"", label: "Password", name: "password", type: "password", required: true },
  ],
  onSubmit: () => {
    console.log("login");
  },
};
