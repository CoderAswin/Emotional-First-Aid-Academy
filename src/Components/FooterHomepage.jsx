import { Facebook, Google, RssFeed, SportsBasketball, Twitter, WbCloudy } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

const FooterHomepage = () => {
  return (
    <Box>
      <Container>
        <Stack mt={6} spacing={2} direction="row" alignItems="center">
          <img
            style={{ height: "55px", width: "130px" }}
            src={require("../Assets/EFA_Registered Logo.png")}
            alt=""
          />
          <span>Support</span>
          <span>About</span>
          <span>Contact Us</span>
          <span>The Team</span>
        </Stack>
        <Box mt={3} style={{display:"flex" , justifyContent:"space-between"}}>
          <Stack spacing={2} direction="row">
            <span>&copy;2023 Emotional First Aid Academy</span>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Send Feedback</span>
          </Stack>
          <Stack spacing={2} direction="row" color="#5C6165">
            <Facebook  />
            <Twitter />
            <Google />
            <SportsBasketball />
            <WbCloudy />
            <RssFeed />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterHomepage;
