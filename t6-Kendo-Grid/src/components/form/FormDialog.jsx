import { useContext } from "react";
import Button from "../buttons/Button";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import axios from "axios";
import FormContext from "../../context/Form-Context";
const FormDialog = () => {
  const { openDialog, setOpenDialog } = useContext(FormContext);
  const endpoint = "https://623abb71b5292b8bfcb8eeff.mockapi.io/grid";

  const onSubmitHandler = async (data) => {
    if (openDialog.dataItem.dataItem) {
      try {
        const response = await axios.put(endpoint + "data.ProductID", data);
        console.log("Your product is succesfully updated");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.post(endpoint, data);
        console.log("Your product is succesfully added");
      } catch (error) {
        console.error(error);
      }
    }
  };
  // console.log(openDialog);
  return (
    <>
      {openDialog.isOpen && (
        <Dialog>
          <Form
            key={Math.random()}
            initialValues={openDialog.dataItem.dataItem}
            onSubmit={onSubmitHandler}
            render={() => (
              <FormElement
                style={{
                  width: 400,
                }}
              >
                <fieldset className={"k-form-fieldset"}>
                  <div className="mb-3">
                    <Field
                      name={"ProductName"}
                      component={Input}
                      label={"Product Name"}
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      name={"Category"}
                      component={DropDownList}
                      textField={"CategoryName"}
                      label={"Category"}
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      name={"UnitPrice"}
                      component={NumericTextBox}
                      textField={NumericTextBox}
                      label={"Price"}
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      name={"UnitsInStock"}
                      component={NumericTextBox}
                      label={"In stock"}
                    />
                  </div>
                </fieldset>
                <div className="k-form-buttons">
                  <Button
                    type="submit"
                    label={openDialog.dataItem.dataItem ? "Update" : "Add"}
                  />
                  <Button
                    label="Cancel"
                    onClick={() =>
                      setOpenDialog({ isOpen: false, dataItem: {} })
                    }
                  />
                </div>
              </FormElement>
            )}
          />
        </Dialog>
      )}
    </>
  );
};

export default FormDialog;
