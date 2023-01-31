import { Button } from "../components/buttons/Button";

export default {
  title: "Example/Button",
  component: Button,
};
const onclick = () => {
  alert("hello");
};
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onclick: { onclick },
  size: "medium",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "skyblue",
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "green",
  size: "small",
  label: "Button",
};
