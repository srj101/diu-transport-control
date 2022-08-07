import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Users = ({ title }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 11, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 12, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 13, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 14, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 15, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 16, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 17, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 18, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 19, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 20, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 21, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 22, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 23, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 24, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 25, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 26, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 27, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  useEffect(() => {
    document.title = title;
    return;
  }, []);

  return (
    <div className="box-container">
      <Box sx={{ height: 670, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Users;
