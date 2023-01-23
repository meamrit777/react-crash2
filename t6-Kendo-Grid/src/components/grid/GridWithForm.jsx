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
  onSubmitAdd,
  onUpdatedHandler,
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
        <Column field="id" title="ID" />
        <Column field="ProductName" title="Name" />
        <Column field="Category.CategoryName" title="Category" />
        <Column field="UnitPrice" title="Price" />
        <Column field="UnitsInStock" title="In Stock" />
        <Column cell={editDeleteCell} /> {/* for two buttons edit and delete */}
      </Grid>
      <FormDialog
        onSubmitAdd={onSubmitAdd}
        onUpdatedHandler={onUpdatedHandler}
      />
    </>
  );
};

export default GridWithForm;
