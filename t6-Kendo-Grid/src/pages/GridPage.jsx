import React, { useState } from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import GridWithForm from "../components/grid/GridWithForm";
import FormContext from "../context/Form-Context";
import { toast } from "react-toastify";
import toastResult from "../utilities/utilities";

const GridPage = () => {
  const { setOpenDialog } = useContext(FormContext);
  const endpoint = "http://localhost:3300/products";
  const [loadedData, setLoadedData] = useState();

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setLoadedData(res.data);
      })
      .catch();
  }, []);

  const editHandler = (dataItem) => {
    setOpenDialog({ isOpen: true, dataItem: dataItem });
  };
  const deleteHandler = async (data) => {
    const res = await axios.delete(`${endpoint}/${data.dataItem.id}`);
    const newData = loadedData.filter((item) => {
      return item.id !== data.dataItem.id;
    });
    setLoadedData(newData);
    toastResult(
      "Data Deteted Successfully.",
      "Error Deleting Data.",
      res.status
    );
  };
  const addHandler = () => {
    setOpenDialog({ isOpen: true, dataItem: {} });
  };
  const onSubmitAdd = async (data) => {
    const res = await axios.post(endpoint, data);
    setLoadedData((previousData) => [...previousData, res.data]);
    toastResult("Data Added Successfully.", "Error Added Data.", res.status);

    setOpenDialog({ isOpen: false });
  };
  const onUpdatedHandler = async (data) => {
    const res = await axios.put(`${endpoint}/${data.id}`, data);
    const newData = loadedData.map((item) => {
      if (item.id === data.id) {
        return data;
      } else return item;
    });
    res.status === 200 && setLoadedData(newData);
    toastResult(
      "Data Updated Successfully.",
      "Error Updating Data.",
      res.status
    );
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
    </div>
  );
};

export default GridPage;
