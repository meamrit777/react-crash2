import React, { useState } from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import GridWithForm from "../components/grid/GridWithForm";
import FormContext from "../context/Form-Context";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import Button from "../components/buttons/Button";
import { toast } from "react-toastify";

const GridPage = () => {
  const { setOpenDialog } = useContext(FormContext);
  const endpoint = "http://localhost:3300/products";
  const [loadedData, setLoadedData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setLoadedData(res.data);
      })
      .catch();
  }, []);
  const toggleDialog = () => {
    // const response = await axios.delete(`${endpoint}/${data.dataItem.id}`);
    setVisible(!visible);
  };
  const toogleCancel = () => {
    setVisible(!visible);
  };
  const editHandler = (dataItem) => {
    setOpenDialog({ isOpen: true, dataItem: dataItem });
  };
  const deleteHandler = async (data) => {
    const res = await axios.delete(`${endpoint}/${data.dataItem.id}`);
    res.data &&
      toast.warning(`Product Deleted Successfully.`, {
        position: toast.POSITION.TOP_RIGHT,
      });
  };
  const addHandler = () => {
    setOpenDialog({ isOpen: true, dataItem: {} });
  };
  const onSubmitAdd = async (data) => {
    try {
      const res = await axios.post(endpoint, data);
      res.data &&
        toast.success("Your Data has been successfully added", {
          position: toast.POSITION.TOP_RIGHT,
        });
    } catch (error) {
      alert(error);
    }
    setOpenDialog({ isOpen: false });
  };
  const onUpdatedHandler = async (data) => {
    const response = await axios.put(`${endpoint}/${data.id}`, data);
    setOpenDialog({ isOpen: false });
  };
  return (
    <div style={{ margin: "2rem" }}>
      <GridWithForm
        items={loadedData}
        onAddHandler={addHandler}
        onEditHandler={editHandler}
        onDeleteHandler={deleteHandler}
        onSubmitAdd={onSubmitAdd}
        onUpdatedHandler={onUpdatedHandler}
      />
      {visible && (
        <Dialog title={"Please confirm"} onClose={toogleCancel}>
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
            <Button onClick={toogleCancel} label="No" />
          </DialogActionsBar>
        </Dialog>
      )}
    </div>
  );
};

export default GridPage;
