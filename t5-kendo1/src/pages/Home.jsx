import React from "react";
import Button from "../components/buttons/Button";
import Form from "../components/form/Form";
import FormDialog from "../components/form/FormDialog";

const Home = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div>
      Stew's Home
      <hr />
      {/* <FormDialog /> */}
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Home;
