import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthContextProvider";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = [
  { name: "ABOUT US", link: "/about", id: 1 },
  { name: "CONTACT US", link: "/contacts", id: 2 },
  { name: "PRODUCTS", link: "/products", id: 3 },
  // { name: 'ADMIN', link: '/admin', id: 4 },
];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const {
    handleLogout,
    user: { email },
  } = React.useContext(authContext);
  const navigate = useNavigate();

  const ADMIN = "admin@gmail.com";

  const { handleLogOut } = React.useContext(authContext);

  return (
    <AppBar position="static" elevation={3}>
      <Container maxWidth="xl" sx={{ background: "white" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              id="logo"
              src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/logo_3.png"
              alt=""
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
                color: "black",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box>
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.link}>
                      <Typography
                        sx={{
                          ml: "auto",
                          my: 1,
                          color: "black",
                          display: "block",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              id="logo"
              src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/logo_3.png"
              alt=""
            />
          </Typography>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    ml: "auto",
                    my: 2,
                    color: "black",
                    display: "block",
                    fontWeight: "bold",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            {/* // -------------------------------------------------------------------- */}

            {email == ADMIN ? (
              <Link to="/admin">
                <Button sx={{ my: 2, color: "black" }}>ADMIN PAGE</Button>
              </Link>
            ) : (
              <Link to="/cart">
                <Button sx={{ my: 2, color: "black" }}>
                  <Badge /*badgeContent={count}*/ color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </Button>
              </Link>
            )}
          </Box>
          {/* // -------------------------------------------------------------------- */}

          {/* // -------------------------------------------------------------------- */}

          <Box sx={{ flexGrow: 0 }}>
            {email ? (
              <Button
                sx={{ color: "black", fontWeight: "bold" }}
                onClick={handleLogout}
              >
                LOGOUT
              </Button>
            ) : (
              <Link to="/auth">
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  LOGIN
                </Button>
              </Link>
            )}
            {/* // -------------------------------------------------------------------- */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
