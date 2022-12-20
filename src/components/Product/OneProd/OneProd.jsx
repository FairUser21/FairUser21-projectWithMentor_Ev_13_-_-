import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productContext } from "../../../contexts/ProductContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartContext } from "../../../contexts/СartContextProvider";
import { IconButton } from "@mui/material";

export default function OneProd({ item }) {
  const { deleteProduct } = useContext(productContext);
  const { addProductToCart, checkProductInCart } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardMedia
        component="img"
        height="140"
        sx={{ width: 200 }}
        image={item.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <IconButton size="small" onClick={() => addProductToCart(item)}>
          <ShoppingCartIcon
            color={checkProductInCart(item.id) ? "primary" : ""}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
