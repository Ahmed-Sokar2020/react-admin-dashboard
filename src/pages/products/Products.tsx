import { useState } from "react";
import "./products.scss";
import { productsRows } from "../../data";
import type { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";

// Using Data Grid from MUI Library to make the  header columns of the Products table
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <img src={params.row.img || "/noavatar.png"} alt="" loading="lazy" />
      );
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 220,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 90,
    type: "boolean",
  },
];

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="products">
      <div className="productsInfo">
        <h1>Products</h1>
        <button onClick={() => setIsOpen(true)}>Add New Product</button>
      </div>

      <DataTable columns={columns} rows={productsRows} slug="products" />
      {isOpen && <Add setIsOpen={setIsOpen} columns={columns} slug="product" />}
    </div>
  );
};

export default Products;
