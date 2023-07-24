import styled from "@emotion/styled";
import { Box, Checkbox, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Categories = () => {
  const CategoryCheckbox = styled(Paper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
    fontWeight: "700",
    
  }));

  return (
    <Box sx={{ padding: "20px", marginLeft: "2rem" }}>
      <Typography variant="span">Categories I'm interested in</Typography>
      <Grid
        mt={3}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Select All</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Mental </Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>MH Tips</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Support</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>

        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Enabler</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Exchange</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Art</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Q&As</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>

        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Social</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Random</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Music</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Science</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>

        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Pets</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Education</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
        <Grid item xs={3}>
          <CategoryCheckbox variant="outlined">
            <Checkbox size="small" />
            <Stack direction="row">
              <Typography>Video</Typography>
            </Stack>
          </CategoryCheckbox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Categories;
