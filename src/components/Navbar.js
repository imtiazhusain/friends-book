import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import { Mail } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import myImage from "./Asset 2@4x.png";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display:'none',
    gap:'30px',
    alignItems:'center',
    [theme.breakpoints.up('sm')]:{
        display:'flex'
    }
    // justifyContent:"space-evenly",
    // width:"15%"
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
    const [open,setOpen] = useState(false)
  return (
    <AppBar position="sticky" bgcolor="primary">
      <StyledToolbar>
        <Typography
          varient="h6"
          sx={{ display: { xs: "none", sm: "inline-block" }, color: "white" }}
        >
          Friends Book
        </Typography>
        <Diversity1Icon
          sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
        ></Diversity1Icon>
        <Search>
          <InputBase placeholder="Search..." sx={{ width: "100%" }} />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail sx={{ color: "white" }} />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon sx={{ color: "white" }} />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src={myImage}
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            onClick={(event) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            onClick={(event) => setOpen(true)}
          />
          <Typography variant="span" color="white">
            Imtiaz Hussain
          </Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={event=>setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
