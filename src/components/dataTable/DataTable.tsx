import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import "./dataTable.scss";
import { GridToolbar } from "@mui/x-data-grid/internals";
import { Link } from "react-router-dom";

type UserDataTableProps = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = ({ columns, rows, slug }: UserDataTableProps) => {
  const handelDelete = (id: number) => {
    // Delete the item
    // axios.delete(`/api/${slug}/id`)
    console.log(`id number: ${id} is deleted `);
  };

  // Using Data Grid from MUI Library
  const actionsColumn: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="actions">
          {/* Link to navigate to the (User or Product) page */}
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/icons/view.svg" alt="" loading="lazy" />
          </Link>

          <div className="delete" onClick={() => handelDelete(params.row.id)}>
            <img src="/icons/delete.svg" alt="" loading="lazy" />
          </div>
        </div>
      );
    },
  };

  return (
    // Using Data Grid from MUI Library
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionsColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        showToolbar
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
