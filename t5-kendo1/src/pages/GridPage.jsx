import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import GridWithForm from "../components/grid/GridWithForm";
const GridPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [loadedData, setLoadedData] = useState([]);
  const [editItem, setEditItem] = useState();

  useEffect(() => {
    axios
      .get("https://623abb71b5292b8bfcb8eeff.mockapi.io/grid")
      .then((res) => {
        // console.log(res.data);
        setLoadedData(res.data);
      })
      .catch();
  }, []);

  const onEdit = (data) => {
    setOpenDialog(true);
    // setEditItem(data)
    console.log("data", data);
  };
  const onDelete = () => {
    console.log("delete clicked");
  };
  const onAdd = (data) => {
    console.log(data)
    setOpenDialog(true);
    console.log("javejc");
    };
  return (
    <GridWithForm
      onAddHandler={onAdd}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      items={loadedData}
      onEditHandler={onEdit}
      onDeleteHandler={onDelete}
    />
  );
};

export default GridPage;
