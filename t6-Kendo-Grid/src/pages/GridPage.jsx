import React, { useState } from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import GridWithForm from "../components/grid/GridWithForm";
import FormContext from "../context/Form-Context";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import Button from "../components/buttons/Button";

const GridPage = () => {
  const { openDialog, setOpenDialog } = useContext(FormContext);
  // console.log("hello", openDialog);
  const [loadedData, setLoadedData] = useState();
  const [visible, setVisible] = useState(true);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  const editHandler = (dataItem) => {
    // console.log(dataItem.dataItem);
    setOpenDialog({ isOpen: true, dataItem: dataItem });
  };

  const deleteHandler = (data) => {
    toggleDialog();
  };

  const addHandler = () => {
    setOpenDialog({ isOpen: true, dataItem: {} });
  };

  useEffect(() => {
    axios
      .get("https://623abb71b5292b8bfcb8eeff.mockapi.io/grid")
      .then((res) => {
        // console.log(res.data);
        setLoadedData(res.data);
      })
      .catch();
  }, []);

  return (
    <div style={{ margin: "2rem" }}>
      <GridWithForm
        items={loadedData}
        onAddHandler={addHandler}
        onEditHandler={editHandler}
        onDeleteHandler={deleteHandler}
      />
      {visible && (
        <Dialog title={"Please confirm"} onClose={toggleDialog}>
          <p
            style={{
              margin: "25px",
              textAlign: "center",
            }}
          >
            Are you sure you want to continue?
          </p>
          <DialogActionsBar>
            <Button
              style={{ background: "#007bff" }}
              onClick={toggleDialog}
              label="Yes"
            />
            <Button onClick={toggleDialog} label="No" />
          </DialogActionsBar>
        </Dialog>
      )}
    </div>
  );
};

export default GridPage;
