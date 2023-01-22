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
  onEditHandler,
  onDeleteHandler,
  onAddHandler,
}) => {
  const editDeleteCell = (dataItem) => {
    return (
      <CommandCell
        editButton={{ label: "edit", onClick: () => onEditHandler(dataItem) }}
        deleteButton={{
          label: "delete",
          onClick: () => onDeleteHandler(dataItem),
        }}
      />
    );
  };

  return (
    <>
      <Grid data={items}>
        <GridToolbar>
          <Button label="Add new" onClick={() => onAddHandler()} />
        </GridToolbar>
        <Column field="ProductID" title="ID" />
        <Column field="ProductName" title="Name" />
        <Column field="Category.CategoryName" title="Category" />
        <Column cell={editDeleteCell} /> {/* for two buttons edit and delete */}
      </Grid>
      <FormDialog />
    </>
  );
};

export default GridWithForm;
