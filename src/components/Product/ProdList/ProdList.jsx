import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../../contexts/ProductContextProvider";
import OneProd from "../OneProd/OneProd";

const ProdList = () => {
  const { products, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginRight: "30px",
      }}
    >
      {products
        ? products.map((item) => <OneProd key={item.id} item={item} />)
        : null}
    </Box>
  );
};

export default ProdList;
