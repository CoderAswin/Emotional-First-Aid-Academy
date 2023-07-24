import { Facebook, Google, Twitter, YouTube } from "@mui/icons-material";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  NativeSelect,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Categories from "../Components/Categories";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate()
  return (
    <Box mt={4}>
      <Box>
        <Box style={{ textAlign: "center" }}>
          <img
            style={{ width: "15rem", objectFit: "cover" }}
            src={require("../Assets/EFA_Registered Logo.png")}
            alt=""
          />
          <Divider style={{ marginLeft: "40rem", marginRight: "40rem" }} />
          <Typography mt={2} fontWeight="bold">
            Create a Emotional First Aid-Enabler Account
          </Typography>
          <Typography mt={2} color="#ACADB3">
            By signing up you can start posting,replaying to topics,earn badges{" "}
            <br /> favourite , vote topics and many more{" "}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F9F9FB",
        }}
      >
        <Box sx={{ backgroundColor: "#FFFFFF", width: "640px" }}>
          <Box sx={{ position: "absolute", right: "4rem" }}>
            <Typography variant="span" style={{ marginRight: "20px" }}>
              Already have an account?
            </Typography>
            <Button onClick={()=>navigate("/homepage")} style={{ backgroundColor: "#C8C9CE", color: "#222024" }}>
              Go To Home
            </Button>
          </Box>

          <Box>
            <Stack
              direction="row"
              spacing={4}
              sx={{ padding: "20px", marginLeft: "2rem" }}
            >
              <Box>
                <Typography variant="span">First Name</Typography>
                <TextField
                  id="input-with-icon-textfield"
                  // label="First Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                  sx={{ width: "16rem", fontWeight: "700" }}
                />
              </Box>

              <Box>
                <Typography variant="span">Last Name</Typography>
                <TextField
                  id="input-with-icon-textfield"
                  
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                  sx={{ width: "15rem" }}
                />
              </Box>
            </Stack>

            <Box sx={{ marginLeft: "2rem" }}>
              <Box mt={2} sx={{ padding: "20px" }}>
              <Typography variant="span">UserName</Typography>
                <TextField
                  id="input-with-icon-textfield"
                  // label="Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                  sx={{ width: "33rem" }}
                />
              </Box>

              <Box mt={2} sx={{ padding: "20px" }}>
              <Typography variant="span">Email Address</Typography>
                <TextField
                  id="input-with-icon-textfield"
                  // label="Email Address"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                  sx={{ width: "33rem" }}
                />
              </Box>

              <Box mt={2} sx={{ padding: "20px" }}>
              <Typography variant="span">Password</Typography>
                <TextField
                  id="input-with-icon-textfield"
                  // label="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                  sx={{ width: "33rem" }}
                />
              </Box>
            </Box>

            <Divider textAlign="left" sx={{ marginTop: "2.7rem" }}>
              <Typography sx={{ fontWeight: "700" }} variant="span">
                Privacy Settings (Optional)
              </Typography>
            </Divider>

            <Box mt={3} sx={{ padding: "20px", marginLeft: "2rem" }}>
              <Typography variant="span">Who can see my Profile?</Typography>
              <Stack direction="row" mt={1} spacing={2}>
                <Paper variant="outlined"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    paddingRight: "10px",
                  }}
                >
                  <Checkbox size="small" />
                  <Stack direction="row">
                    <Typography>Everyone</Typography>
                  </Stack>
                </Paper>
                <Paper variant="outlined"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    paddingRight: "10px",
                  }}
                >
                  <Checkbox size="small" />
                  <Stack direction="row">
                    <Typography>Only Friends</Typography>
                  </Stack>
                </Paper>
                <Paper variant="outlined"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    paddingRight: "10px",
                  }}
                >
                  <Checkbox size="small" />
                  <Stack direction="row">
                    <Typography>Invite Only</Typography>
                  </Stack>
                </Paper>
              </Stack>
            </Box>

            <Box mt={3} sx={{ padding: "20px", marginLeft: "2rem" }}>
              <Typography variant="span">Who can see my Profile?</Typography>
              <Stack direction="row" mt={1} spacing={2}>
                <Paper variant="outlined"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "10px",
                  }}
                >
                  <Checkbox size="small" />
                  <Stack direction="row" spacing={1}>
                    <Facebook sx={{ color: "#3B589B" }} />
                    <Typography>Facebook</Typography>
                  </Stack>
                </Paper>
                <Paper variant="outlined"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    paddingRight: "10px",
                  }}
                >
                  <Checkbox size="small" />
                  <Stack direction="row" spacing={1}>
                    <Twitter sx={{ color: "#5FAAF0" }} />
                    <Typography>Twitter</Typography>
                  </Stack>
                </Paper>
                <Paper variant="outlined"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    paddingRight: "10px",
                  }}
                >
                  <Checkbox size="small" />
                  <Stack direction="row" spacing={1}>
                    <Google sx={{ color: "#DA5C48" }} />
                    <Typography>Google +</Typography>
                  </Stack>
                </Paper>
              </Stack>
            </Box>

            <Divider textAlign="left" sx={{ marginTop: "2.7rem" }}>
              <Typography sx={{ fontWeight: "700" }} variant="span">
                Small Survey (Optional)
              </Typography>
            </Divider>

            <Box sx={{ marginLeft: "2rem" }}>
              <Stack
                direction="row"
                spacing={2}
                mt={3}
                sx={{ padding: "20px" }}
              >
                <Box>
                  <FormControl>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      How old are you?
                    </InputLabel>
                    <NativeSelect
                      defaultValue={10}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                      sx={{ width: "250px" }}
                    >
                      <option value={10}>21</option>
                      <option value={20}>22</option>
                      <option value={30}>23</option>
                    </NativeSelect>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Who are you?
                    </InputLabel>
                    <NativeSelect
                      defaultValue={10}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                      sx={{ width: "250px" }}
                    >
                      <option value={10}>Male</option>
                      <option value={20}>Female</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ padding: "20px" }}>
                <Box>
                  <FormControl>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Will you be friendly here?
                    </InputLabel>
                    <NativeSelect
                      defaultValue={10}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                      sx={{ width: "250px" }}
                    >
                      <option value={10}>Yes</option>
                      <option value={20}>No</option>
                    </NativeSelect>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Where do you heard about us?
                    </InputLabel>
                    <NativeSelect
                      defaultValue={10}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                      sx={{ width: "250px" }}
                    >
                      <option value={10}>Social Media</option>
                      <option value={20}>News Paper</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </Stack>
            </Box>

            <Divider textAlign="left" sx={{ marginTop: "2.75rem" }}>
              <Typography sx={{ fontWeight: "700" }} variant="span">
                Link Social Networks (Optional)
              </Typography>
            </Divider>

            <Box mt={4} sx={{ padding: "20px", marginLeft: "2rem" }}>
              <Stack direction="row" spacing={2}>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Facebook URL"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Facebook style={{ color: "#0B85EE" }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    sx={{ width: "250px" }}
                  />
                </Box>

                <Box>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Twitter URL"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Twitter style={{ color: "#1DA1F2" }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    sx={{ width: "250px" }}
                  />
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} mt={4}>
                <Box>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Google Account"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Google style={{ color: "#EA4A3D" }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    sx={{ width: "250px" }}
                  />
                </Box>

                <Box>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Youtube Account"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <YouTube style={{ color: "#FF0000" }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    sx={{ width: "250px" }}
                  />
                </Box>
              </Stack>
            </Box>

            <Divider textAlign="left" sx={{ marginTop: "2.7rem" }}>
              <Typography sx={{ fontWeight: "700" }} variant="span">
                Interested Categories (Optional)
              </Typography>
            </Divider>

            {/* interested categories        */}
            <Categories />

            <Divider sx={{ marginTop: "1.2rem" }} />

            <Stack
              direction="row"
              mt={1}
              spacing={5}
              sx={{ marginLeft: "2rem" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox size="small" />
                <Stack direction="row">
                  <Typography variant="span">
                    I agree to the terms and conditions
                  </Typography>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox size="small" />
                <Stack direction="row">
                  <Typography variant="span">
                    Subscribe to newsletter
                  </Typography>
                </Stack>
              </Box>
            </Stack>

            <Box mt={1} sx={{ marginLeft: "2.5rem" }}>
              <Button
                style={{ width: "96%", backgroundColor: "#AD0922" }}
                variant="contained"
              >
                Create New Account
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
