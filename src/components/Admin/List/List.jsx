import React, { useContext, useEffect } from "react";
import { productContext } from "../../../contexts/ProductContextProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const List = () => {
  const { products, getProducts } = useContext(productContext);
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Type
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Image
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Price
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <TableRow>
                  <TableCell align="center">{item.title}</TableCell>
                  <TableCell align="center">{item.type}</TableCell>
                  <TableCell align="center">{item.img}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
};

export default List;
