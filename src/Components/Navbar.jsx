import styled from "@emotion/styled";
import {
  ArrowDropDown,
  Search,
  Menu,
  NotificationAdd,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import "../Styles/navbar.css"

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ padding: "15px", backgroundColor: "#F9F9FB" }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "black",
          }}
        >
          <Box>
            <img
              style={{ height: "55px" , cursor:"pointer"}}
              src={require("../Assets/EFA_Registered Logo.png")}
              alt=""
              onClick={()=>navigate("/")}
              
            />
          </Box>

        
          <Box style={{position:"relative"}}>
            {/* <Search style={{ color: "black" }} /> */}
            <input placeholder="Search All Forums" type="text"/>
            <Box style={{position:"absolute" , top:"11px" , left:"5px"}}>
              <Search style={{ color: "#C1C1C1" , fontSize:"40px"}} />
            </Box>
          </Box>

          <Stack direction="row" alignItems="center">
            <Typography variant="span">Topics</Typography>
            <ArrowDropDown />
          </Stack>

            
            
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              color: "black",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="span">Latest Topics</Typography>
              <Menu />
            </Stack>

            <NotificationsNoneOutlined />

            <Box
              style={{
                borderRadius: "50%",
                backgroundColor: "#837DF9",
                width: "40px",
                height: "40px",
                textAlign: "center",
              }}
            >
              <Typography style={{cursor:"pointer"}} onClick={()=>navigate("/")} mt={1}>A</Typography>
            </Box>

            <Stack direction="row" alignItems="center">
              <Typography variant="span">Max</Typography>
              <ArrowDropDown />
            </Stack>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
