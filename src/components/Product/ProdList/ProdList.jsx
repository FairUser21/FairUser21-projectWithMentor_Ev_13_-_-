import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../../contexts/ProductContextProvider";
import OneProd from "../OneProd/OneProd";

const ProdList = () => {
  const { products, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box>
      {products ? products.map((item) => <OneProd item={item} />) : null}
    </Box>
  );
};

export default ProdList;
