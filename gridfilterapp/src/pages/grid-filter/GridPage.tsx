import { useState } from "react";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { sampleProducts } from "../../utilities/sample-products";
import { filterBy } from "@progress/kendo-data-query";
import { DropdownFilterCell } from "./dropdownFilterCell";
import { Button } from "@progress/kendo-react-buttons";
import { RangeFilterCell } from "./rangeFilterCell";
import { GridFilterCellProps } from "@progress/kendo-react-grid";

const categories = Array.from(
  new Set(
    sampleProducts.map((p) => (p.Category ? p.Category.CategoryName : ""))
  )
);
const CategoryFilterCell = (props: GridFilterCellProps) => (
  <DropdownFilterCell
    {...props}
    data={categories}
    defaultItem={"Select category"}
  />
);

function GridPage() {
  const [data, setData] = useState(sampleProducts);
  const [filter, setFilter] = useState();
  const filterChange = (event: any) => {
    setData(filterBy(sampleProducts, event.filter));
    setFilter(event.filter);
  };
  return (
    <div className="App">
      <Grid
        data={data}
        filterable={true}
        filter={filter}
        onFilterChange={filterChange}
      >
        <Column field="ProductID" title="ID" filterable={false} />
        <Column field="ProductName" title="Product Name" />
        <Column
          field="Category.CategoryName"
          title="Category name"
          filterCell={CategoryFilterCell}
        />
        <Column
          field="UnitPrice"
          format="{0:c}"
          title="Unit Price"
          filterCell={RangeFilterCell}
        />
      </Grid>
    </div>
  );
}

export default GridPage;
