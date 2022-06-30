import React, { useState } from "react";
import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  IconButton,
  Drawer,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Text } from "../styles";
import Profile from "../images/Profile.jpg";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreIcon from "@mui/icons-material/MoreVert";
import ProfileModal from "../modal/ProfileModal";
import UserModal from "../modal/UserModal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#FFFFFF",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "##00000040",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const [profileopen, setProfileOpen] = useState(false);
  const [useropen, setUserOpen] = useState(false);

  const [drawer, setDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileOpen = () => {
    setProfileOpen(!profileopen);
  };
  const handleUserOpen = () => {
    setUserOpen(!useropen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const toggleDrawer = (state) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(state);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleProfileOpen}>Edit Profile</MenuItem>
      <MenuItem onClick={handleUserOpen}>Users</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileOpen}>Edit Profile</MenuItem>
      <MenuItem onClick={handleUserOpen}>Users</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#F4F5F7",
          boxShadow: "none",
          paddingTop: "4px",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              ml: "auto",
              display: { md: "none", sm: "block", xs: "block" },
            }}
            id="menu_btn"
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#8DB2ED" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{
                "aria-label": "search",
                TextStyle: "Body Text 1",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#6B778C",
                flex: "none",
                order: 0,
                flexGrow: 0,
              }}
            />
          </Search>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon sx={{ color: "#8DB2ED" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <Avatar alt="Remy Sharp" src={Profile} />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{ color: "#8DB2ED" }} />
            </IconButton>

            <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer(false)}>
              <Box
                role="presentation"
                onKeyDown={toggleDrawer(false)}
                sx={{
                  backgroundColor: "primary.semiDark",
                  color: "ternary.main",
                  height: "100%",
                  width: { sm: 0, xs: 200 },
                }}
              >
                <Stack spacing={2} sx={{ m: "35px" }}>
                  <Link href="/dashboard" style={{ textDecoration: "none" }}>
                    <Text sx={{ fontSize: "14px", color: "#6B778C" }}>
                      Dashboard??????
                    </Text>
                  </Link>
                  <Link href="/form" style={{ textDecoration: "none" }}>
                    <Text sx={{ fontSize: "14px", color: "#6B778C" }}>
                      Form??????????????
                    </Text>
                  </Link>
                  <Link href="/employee" style={{ textDecoration: "none" }}>
                    <Text sx={{ fontSize: "14px", color: "#6B778C" }}>
                      Employee??????/
                    </Text>
                  </Link>
                  <Link href="/flows" style={{ textDecoration: "none" }}>
                    <Text sx={{ fontSize: "14px", color: "#6B778C" }}>
                      Flows
                    </Text>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <Text sx={{ fontSize: "14px", color: "#6B778C" }}>
                      Approval
                    </Text>
                  </Link>
                  <Link href="/status" style={{ textDecoration: "none" }}>
                    <Text sx={{ fontSize: "14px", color: "#6B778C" }}>
                      Status
                    </Text>
                  </Link>
                </Stack>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <ProfileModal open={profileopen} handleClose={handleProfileOpen} />
      <UserModal open={useropen} handleClose={handleUserOpen} />
    </div>
  );
};

export default Navbar;
