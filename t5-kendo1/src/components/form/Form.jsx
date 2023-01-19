import { useState } from "react";
import { Input } from "@progress/kendo-react-inputs";
import Button from "../buttons/Button";

function Form({ onSubmit, formLabel = "Create new account:" }) {
  return (
    <div className="row example-wrapper">
      <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
        <form className="k-form" onSubmit={onSubmit}>
          <fieldset>
            <legend>{formLabel}</legend>
            <div className="mb-3">
              <Input
                name="username"
                style={{ width: "100%" }}
                label="First Name"
                pattern={"[A-Za-z]+"}
                required
              />
            </div>
            <div className="mb-3">
              <Input
                name="password"
                type="password"
                style={{ width: "100%" }}
                label="Password"
                required
              />
            </div>
            <div className="mb-3">
              <Input
                name="confirmPassword"
                type="password"
                style={{
                  width: "100%",
                }}
                label="Confirm Password"
                required
              />
            </div>
            <div className="mb-3">
              <Input
                name="email"
                type="email"
                style={{
                  width: "100%",
                }}
                label="Email address"
                required
              />
            </div>
          </fieldset>
          <Button label="Log In" style={{ background: "red" }} />
        </form>
      </div>
    </div>
  );
}

export default Form;
