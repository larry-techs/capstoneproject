import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  id,
  ProductName,
  division,
  description,
  squadExecuting,
  charges
) {
  return { id, ProductName, division, description, squadExecuting, charges };
}

const rows = [
  createData(
    1,
    "Bill Manager",
    "Financial Services",
    "Core Mpesa Upgrade",
    "Bespoke Solutions ",
    "crq"
  ),
  createData(
    1,
    "Bill Manager",
    "Financial Services",
    "Core Mpesa Upgrade",
    "Bespoke Solutions ",
    "crq"
  ),
  createData(
    1,
    "Bill Manager",
    "Financial Services",
    "Core Mpesa Upgrade",
    "Bespoke Solutions ",
    "crq"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Division</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Squad Executing</TableCell>
            <TableCell align="right">Charges</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.ProductName}</TableCell>
              <TableCell align="right">{row.division}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.squadExecuting}</TableCell>
              <TableCell align="right">{row.charges}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
