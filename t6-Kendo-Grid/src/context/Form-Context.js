import { createContext, useState } from "react";

const FormContext = createContext();

export function FormContextProvider(props) {
  const [openDialog, setOpenDialog] = useState({
    isOpen: false,
    dataItem: {},
  });

  return (
    <FormContext.Provider value={{ openDialog, setOpenDialog }}>
      {props.children}
    </FormContext.Provider>
  );
}
export default FormContext;
