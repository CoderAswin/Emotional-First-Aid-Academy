import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Container,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import {
  BookmarkBorderOutlined,
  Close,
  FavoriteBorderOutlined,
  LoyaltyOutlined,
  ReplyOutlined,
  ShareOutlined,
  ThumbDownOffAltOutlined,
  ThumbUpOffAltOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";



const Forum = () => {
  const Users = styled(Box)(({ theme }) => ({
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginLeft: "20px",
  }));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Navbar />
      <Box mt={7}>
        <Container>
          <Box >
            <Typography variant="h6">
              What are you best tips on dealing with procrastination?
            </Typography>
            <Stack direction="row" spacing={4} mt={2}>
              <Box style={{display:"flex" , alignItems:"center"}}>
                <div
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    marginRight: "10px",
                    backgroundColor: "#13B798",
                  }}
                ></div>
                <Typography>Mind</Typography>
              </Box>
              <Box style={{ display: "flex", gap: "10px" }}>
                <Paper
                  style={{
                    backgroundColor: "#527FB0",
                    padding: "3px",
                    color: "white",
                  }}
                >
                  hope
                </Paper>
                <Paper
                  style={{
                    backgroundColor: "#BC1D2C",
                    padding: "3px",
                    color: "white",
                  }}
                >
                  help
                </Paper>
              </Box>
            </Stack>
          </Box>
          <Paper 
            variant="outlined"
            style={{
              width: "900px",
              paddingBottom: "15px",
              paddingTop: "15px",
              marginTop:"20px"
            }}
          >
            <Stack direction="row" alignItems="center" spacing={65}>
              <Stack direction="row" alignItems="center" spacing={5}>
                <Users style={{ backgroundColor: "#5E827F" }}>
                  <Typography variant="span">B</Typography>
                </Users>
                <Typography ariant="span">Benjamin Ceaser</Typography>
              </Stack>
              <Box>
                <Typography>6 May 2023</Typography>
              </Box>
            </Stack>
            <Box style={{ marginLeft: "89px" }}>
              <Typography variant="p">
                I can't work or do anything beacouse of my procrastination
              </Typography>
            </Box>

            <div
              style={{
                width: "500px",
                height: "150px",
                backgroundColor: "#64608C",
                marginLeft: "89px",
                marginTop: "20px",
              }}
            ></div>

            <Divider style={{ marginTop: "40px" }} />
            <Stack
              direction="row"
              spacing={8}
              style={{ marginLeft: "89px" }}
              mt={3}
            >
              <Stack direction="row" spacing={1}>
                <ThumbUpOutlined />
                <Typography>201</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <ThumbDownOffAltOutlined />
                <Typography>90</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <FavoriteBorderOutlined />
                <Typography>500</Typography>
              </Stack>
              <Stack style={{ cursor: "pointer" }} onClick={handleOpen} direction="row" spacing={1}>
                <Typography>Badge</Typography>
                <LoyaltyOutlined />
              </Stack>
              <Stack>
                <BookmarkBorderOutlined />
              </Stack>
              <Stack>
                <ReplyOutlined />
              </Stack>
            </Stack>
          </Paper>
        </Container>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box style={{ textAlign: "end", cursor: "pointer" }}>
              <Close onClick={handleClose} />
            </Box>
            <Stack spacing={4}>
              <Box style={{ textAlign: "center" }}>
                <Typography variant="span" fontWeight="bold">
                  Congratulations!
                </Typography>
                <Typography>
                  You Earned a New Badge on 21 July , 2023
                </Typography>
              </Box>
              <Box style={{ textAlign: "center" }}>
                <img
                  style={{ width: "200px" }}
                  src={require("../Assets/badge.png")}
                  alt=""
                />
              </Box>
              <Divider />
              <Box style={{ textAlign: "center" }}>
                <Typography variant="span" fontWeight="bold">
                  Great Thread
                </Typography>
                <Typography>Create a popular thread</Typography>
              </Box>
            </Stack>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Forum;
