import { Mail, More, Notifications } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

import {
  alpha,
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  Avatar,
  Menu,
} from "@mui/material";
import { useRef, useState } from "react";

const Appbarr = ({ showlist, setshowlist }) => {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
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
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const input = useRef(null);
  const [isopen, setisopen] = useState(false);
  const closemenu = () => {
    setisopen(false);
  };
  const openmenu = () => {
    setisopen(!isopen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#B22222",
        boxShadow: `
        0px 4px 10px rgba(255, 69, 0, 0.6), 
        0px 8px 20px rgba(178, 34, 34, 0.5)`,
      }}
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            if (showlist === "none") {
              setshowlist("block");
            } else {
              setshowlist("none");
            }
          }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Hamoashraf{" "}
        </Typography>
        <Search>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar sx={{ width:"37px", height:"37px"}} src="./image/hh.jpg"></Avatar>
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            onClick={openmenu}
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            ref={input}
          >
            <More />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={input.current}
            open={isopen}
            onClose={closemenu}
          >
            <MenuItem onClick={closemenu}>Profile</MenuItem>
            <MenuItem onClick={closemenu}>My account</MenuItem>
            <MenuItem onClick={closemenu}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbarr;
