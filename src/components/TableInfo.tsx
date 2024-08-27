import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
} from "@mui/material";
import { TableData } from "../interfaces";

// Data array
const data: TableData[] = [
  {
    name: "John Doe",
    age: 28,
    email: "john@example.com",
    phone: "123-456-7890",
    city: "New York",
    country: "USA",
  },
  {
    name: "Jane Smith",
    age: 34,
    email: "jane@example.com",
    phone: "987-654-3210",
    city: "Los Angeles",
    country: "USA",
  },
  {
    name: "Alice Johnson",
    age: 25,
    email: "alice@example.com",
    phone: "555-666-7777",
    city: "Chicago",
    country: "USA",
  },
  {
    name: "Bob Brown",
    age: 45,
    email: "bob@example.com",
    phone: "222-333-4444",
    city: "Houston",
    country: "USA",
  },
  {
    name: "Charlie Davis",
    age: 30,
    email: "charlie@example.com",
    phone: "888-999-0000",
    city: "Phoenix",
    country: "USA",
  },
];

const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: "none",
  "&.MuiTableCell-head": {
    fontWeight: "bold",
  },
}));

const DataTable: React.FC = () => {
  return (
    <section className="h-[20vh]">
      <TableContainer component={Paper}>
        <Table className="border-b-none">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell>ID</StyledTableCell> */}
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                {/* <StyledTableCell>{row.id}</StyledTableCell> */}
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.age}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.phone}</StyledTableCell>
                <StyledTableCell>{row.city}</StyledTableCell>
                <StyledTableCell>{row.country}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default DataTable;
