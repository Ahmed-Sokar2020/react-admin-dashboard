import type { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

// Using Data Grid from MUI Library to make the  header columns of the users table
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img src={params.row.img || "./noavatar.png"} alt="" loading="lazy" />
      );
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 110,
    editable: true,
    type: "string",
  },

  {
    field: "lastName",
    headerName: "Last name",
    width: 110,
    editable: true,
    type: "string",
  },

  {
    field: "email",
    headerName: "Email",
    sortable: true,
    width: 160,
    type: "string",
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: true,
    width: 100,
    type: "string",
  },

  {
    field: "createdAt",
    headerName: "CreatedAt",
    width: 100,
    sortable: true,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="users">
      <div className="usersInfo">
        <h1>Users</h1>
        <button onClick={() => setIsOpen(true)}>Add New User</button>
      </div>

      <DataTable columns={columns} rows={userRows} slug="users" />
      {isOpen && <Add setIsOpen={setIsOpen} columns={columns} slug="user" />}
    </div>
  );
};

export default Users;
