import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../../contexts/ProductContextProvider";
import OneProd from "../OneProd/OneProd";
import SearchIcon from "@mui/icons-material/Search";

const ProdList = () => {
  const { products, getProducts, fetchByParams } = useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(1);
  const count = Math.ceil(products.length / 3);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function currentData() {
    const begin = (page - 1) * 3;
    const end = begin + 3;
    return products.slice(begin, end);
  }

  console.log(products);
  return (
    <Box>
      <Grid container spacing={3}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginRight: "30px",
          }}
        >
          {products
            ? currentData().map((item) => <OneProd key={item.id} item={item} />)
            : null}
        </Box>
        {/* !---------------- FIlTER-------------------- */}
        <Grid item md={3}>
          <Paper elevation={5} sx={{ p: 2 }}>
            <TextField
              id="input-with-icon-textfield"
              label="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
                onChange={(e) => fetchByParams("type", e.target.value)}
              >
                <FormControlLabel value="all" control={<Radio />} label="all" />
                <FormControlLabel
                  value="telephone"
                  control={<Radio />}
                  label="telephone"
                />
                <FormControlLabel
                  value="laptop"
                  control={<Radio />}
                  label="laptop"
                />
                <FormControlLabel
                  value="watch"
                  control={<Radio />}
                  label="watch"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        {/* ------------- FILTER END ----------*/}
      </Grid>
      <Pagination count={count} page={page} onChange={(e, p) => setPage(p)} />
    </Box>
  );
};

export default ProdList;
