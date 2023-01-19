import React from "react";
import Button from "../buttons/Button";

const CommandCell = ({ dataItem, editButton, deleteButton }) => {
  return (
    <>
      <Button label={editButton.label} onClick={editButton.onEdit} />
      <Button label={deleteButton.label} onClick={deleteButton.onDelete} />
    </>
  );
};

export default CommandCell;
