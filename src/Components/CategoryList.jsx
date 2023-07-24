import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {

  const navigate = useNavigate()
  return (
    <Box mt={3}>
      <Container>
        <Box style={{ display: "flex", gap: "15px" , alignItems:"center"}}>
          <Box style={{display:"flex" , backgroundColor:"#CAC4CF" , padding:"5px" , gap:"6px"}}>
            <Typography >All categories</Typography>
            <KeyboardArrowDown/>
          </Box>
          <Box style={{display:"flex", backgroundColor:"#CAC4CF", padding:"5px", gap:"6px"}}>
            <Typography>Tags</Typography>
            <KeyboardArrowDown/>
          </Box>
          <Box>
            <Typography>Latest</Typography>
          </Box>
          <Box>
            <Typography>Unread</Typography>
          </Box>
          <Box>
            <Typography>Rising</Typography>
          </Box>
          <Box>
            <Typography>Most Liked</Typography>
          </Box>
          <Box >
            <Typography style={{cursor:"pointer"}} onClick={()=> navigate("/forum")}>Follow Feed</Typography>
          </Box>
        </Box>
        <Divider style={{ marginTop: "1rem" }} />
      </Container>
    </Box>
  );
};

export default CategoryList;
