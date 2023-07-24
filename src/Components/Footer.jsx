import { Facebook, Google, RssFeed, SportsBasketball, Twitter, WbCloudy } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box mt={3} sx={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Stack direction="row" spacing={4}>
          <Typography>Terms</Typography>
          <Typography>Privacy</Typography>
          <Typography>Send Feedback</Typography>
        </Stack>
        <Stack direction="row" spacing={2} color="#5C6165">
          <Facebook />
          <Twitter />
          <Google />
          <SportsBasketball />
          <WbCloudy />
          <RssFeed />
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
