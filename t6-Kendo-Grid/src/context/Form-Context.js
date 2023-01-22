import { createContext, useState } from "react";

const FormContext = createContext();

export function FormContextProvider(props) {
  const [openDialog, setOpenDialog] = useState({
    isOpen: false,
    dataItem: {},
  });

  // const context = {
  //   openDialog: openDialog,
  //   setOpenDialog: setOpenDialog,
  // };
  return (
    <FormContext.Provider value={{ openDialog, setOpenDialog }}>
      {props.children}
    </FormContext.Provider>
  );
}
export default FormContext;
