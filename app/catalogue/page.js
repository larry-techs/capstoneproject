"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(
//   id,
//   ProductName,
//   division,
//   description,
//   squadExecuting,
//   charges
// ) {
//   return { id, ProductName, division, description, squadExecuting, charges };
// }

// const rows = [
//   createData(
//     1,
//     "Bill Manager",
//     "Financial Services",
//     "Core Mpesa Upgrade",
//     "Bespoke Solutions ",
//     "crq"
//   ),
//   createData(
//     1,
//     "Bill Manager",
//     "Financial Services",
//     "Core Mpesa Upgrade",
//     "Bespoke Solutions ",
//     "crq"
//   ),
//   createData(
//     1,
//     "Bill Manager",
//     "Financial Services",
//     "Core Mpesa Upgrade",
//     "Bespoke Solutions ",
//     "crq"
//   ),
// ];

export default function BasicTable() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.genderize.io/?name=luc")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  console.log(data);

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
          {data.map((row) => (
            <TableRow
              key={row.productId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.itemName}</TableCell>
              <TableCell align="right">{row.division}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.team}</TableCell>
              <TableCell align="right">{row.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
