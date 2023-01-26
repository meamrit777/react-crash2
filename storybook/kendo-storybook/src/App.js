import React, { useRef } from "react";
import "./App.css";
import { Button } from "./components/buttons/Button";
import KendoForm from "./components/forms/KendoForm";
function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const formFields = [
    {
      ref: nameRef,
      label: "Name",
      name: "name",
      type: "text",
      required: true,
    },
    {
      ref: emailRef,
      label: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      ref: passwordRef,
      label: "password",
      name: "password",
      type: "password",
      required: true,
    },
  ];
  const clickHandle = () => {
    console.log("button clicked");
  };
  const handleSubmit = (input) => {
    console.log("input", input);
  };
  return (
    <div className="App">
      <KendoForm onSubmit={handleSubmit} formFields={formFields} />
      <Button label="Press" backgroundColor="skyblue" onClick={clickHandle} />
    </div>
  );
}

export default App;
