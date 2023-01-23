import { useContext } from "react";
import Button from "../buttons/Button";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import axios from "axios";
import FormContext from "../../context/Form-Context";
import Category from "../categories/category.json";
import { toast } from "react-toastify";

const FormDialog = ({ onSubmitAdd, onUpdatedHandler }) => {
  const { openDialog, setOpenDialog } = useContext(FormContext);

  return (
    <>
      {openDialog.isOpen && (
        <Dialog>
          <Form
            key={Math.random()}
            initialValues={openDialog.dataItem.dataItem}
            onSubmit={
              openDialog.dataItem.dataItem ? onUpdatedHandler : onSubmitAdd
            }
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
                      data={Category}
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
