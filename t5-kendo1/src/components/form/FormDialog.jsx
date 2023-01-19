import Button from "../buttons/Button";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
const FormDialog = ({ setOpenDialog, openDialog, dataItem }) => {
  const handleCancel = () => {
    setOpenDialog(false);
  };
  const handleAdd = (datas)=>{
    console.log(datas)
  }
 
  return (
    <>
      {openDialog && (
        <Dialog>
          <Form
            initialValues={dataItem}
            render={() => (
              <FormElement
                style={{
                  maxWidth: 650,
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
                  <Button label="Update" onClick={handleAdd}/>
                  <Button label="Cancel" onClick={handleCancel} />
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
