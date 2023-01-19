import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from "@progress/kendo-react-grid";
import CommandCell from "./CommandCell";
import Button from "../buttons/Button";
import FormDialog from "../form/FormDialog";

const GridWithForm = ({
  items,
  setOpenDialog,
  openDialog,
  onEditHandler,
  onDeleteHandler,
  onAddHandler,
}) => {
  const Cell = (data) => {
    // console.log(data.dataItem);
    return (
      <CommandCell
        
        editButton={{
          dataItem:{data},
          label: "Edit",
          onEdit: onEditHandler,
        }}
        deleteButton={{
          label: "Delete",
          onDelete: onDeleteHandler,
        }}
      />
    );
  };

  // console.log(items);
  return (
    <>
      <Grid data={items} style={{ height: "400px" }}>
        <GridToolbar>
          <Button label="Add new" onClick={onAddHandler} />
        </GridToolbar>
        <Column field="ProductID" title="ID" />
        <Column field="ProductName" title="Name" />
        <Column field="Category.CategoryName" title="Category" />
        <Column cell={Cell} />
      </Grid>
      <FormDialog setOpenDialog={setOpenDialog} openDialog={openDialog} dataItem />
    </>
  );
};

export default GridWithForm;
