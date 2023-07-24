import styled from "@emotion/styled";
import {
  FiberManualRecordOutlined,
  PushPin,
  PushPinOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const Topics = () => {
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

  const Category = styled("div")(({ theme }) => ({
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    marginRight: "10px",
  }));

  return (
    <Box>
      <Container>
        <Box>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Topic</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <TableCell>Users</TableCell>
                  </Box>
                  <TableCell align="right">Replies</TableCell>
                  <TableCell align="right">Views</TableCell>
                  <TableCell align="right">Activity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                      backgroundColor: "#F2D2D7",
                    },
                  }}
                >
                  <TableCell scope="row">
                    <Box style={{ display: "flex", gap: "5px" }}>
                      <PushPin />
                      <Typography>
                        Welcome Enabler! Please read this before posting!
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography variant="span" color="#AA9C9D">
                        Before You make a new topic or post, please read
                        community guidelines <br /> We aim to be the friendliest
                        community for online mental health support
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">66</TableCell>
                  <TableCell align="right">15.1k</TableCell>
                  <TableCell align="right">11 d</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Non-Urgent Emotional Help</Typography>
                    <Box style={{ display: "flex", gap: "10px" }}>
                      <Paper
                        style={{
                          backgroundColor: "#527FB0",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        mental health
                      </Paper>
                      <Paper
                        style={{
                          backgroundColor: "#BC1D2C",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        enabler
                      </Paper>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "12px",
                    }}
                  >
                    <Typography>Mental Health</Typography>

                    <Category
                      style={{
                        backgroundColor: "#13B798",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#DD0F5A" }}>
                        <Typography variant="span">A</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#CDC7D3" }}>
                        <Typography variant="span">G</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#5E827F" }}>
                        <Typography variant="span">P</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "#DCD9DE",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Other Ways Of Getting Help</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#4A3DFF",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#2A6174" }}>
                        <Typography variant="span">L</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#00BD9D" }}>
                        <Typography variant="span">T</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>How to help a person who self harms</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#73C5ED",
                      }}
                    ></Category>{" "}
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#ABD2B3" }}>
                        <Typography variant="span">E</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#E09F6F" }}>
                        <Typography variant="span">I</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#767DB1" }}>
                        <Typography variant="span">R</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "#DCD9DE",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Feeling Overwhelmed</Typography>
                    <Box style={{ display: "flex", gap: "10px" }}>
                      <Paper
                        style={{
                          backgroundColor: "#E3088C",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        hope
                      </Paper>
                      <Paper
                        style={{
                          backgroundColor: "#7AC575",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        help
                      </Paper>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "12px",
                    }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#787A99",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#9869CC" }}>
                        <Typography variant="span">F</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Should I Tell?</Typography>
                    <Box style={{ display: "flex", gap: "10px" }}>
                      <Paper
                        style={{
                          backgroundColor: "#393815",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        neverstop
                      </Paper>
                      <Paper
                        style={{
                          backgroundColor: "#738098",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        doubt
                      </Paper>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "12px",
                    }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#767CA7",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#7D7EFF" }}>
                        <Typography variant="span">A</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#00BE9C" }}>
                        <Typography variant="span">S</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#D3B1CD" }}>
                        <Typography variant="span">W</Typography>
                      </Users>
                    </Stack>
                  </TableCell>

                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "#DCD9DE",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>
                      if you need someone to talk tourgently and in confidence
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "12px",
                    }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#DED5C4",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#74D1DF" }}>
                        <Typography variant="span">B</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#D6B26E" }}>
                        <Typography variant="span">C</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>
                      Post the wierdest thing you own here!
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#505255",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#679439" }}>
                        <Typography variant="span">C</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#D6B26E" }}>
                        <Typography variant="span">W</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#9F5C46" }}>
                        <Typography variant="span">Y</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "#DCD9DE",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Show me your awsome photography</Typography>
                    <Box style={{ display: "flex", gap: "10px" }}>
                      <Paper
                        style={{
                          backgroundColor: "#E96C34",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        photography
                      </Paper>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "12px",
                    }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#ADD2B6",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#74D1DF" }}>
                        <Typography variant="span">D</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#D3B0CF" }}>
                        <Typography variant="span">M</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#7D85B7" }}>
                        <Typography variant="span">R</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Prevention Strategies</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#9A5F44",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#ABD2B6" }}>
                        <Typography variant="span">D</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#7182B9" }}>
                        <Typography variant="span">R</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#07BC9F" }}>
                        <Typography variant="span">T</Typography>
                      </Users>
                    </Stack>
                  </TableCell>

                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "#DCD9DE",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Live music</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#525457",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#87BA91" }}>
                        <Typography variant="span">H</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#D5AFD0" }}>
                        <Typography variant="span">M</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#A56652" }}>
                        <Typography variant="span">Y</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Racing thoughts</Typography>
                    <Box style={{ display: "flex", gap: "10px" }}>
                      <Paper
                        style={{
                          backgroundColor: "#A3D398",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        climbing
                      </Paper>
                      <Paper
                        style={{
                          backgroundColor: "#70829A",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        funny
                      </Paper>
                      <Paper
                        style={{
                          backgroundColor: "#902C88",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        adventure
                      </Paper>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "12px",
                    }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#BCE585",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#306170" }}>
                        <Typography variant="span">L</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#D81058" }}>
                        <Typography variant="span">A</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "#DCD9DE",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Post your artwork!</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#01BD9D",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#DF9F71" }}>
                        <Typography variant="span">I</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#CA8C8E" }}>
                        <Typography variant="span">O</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#687279" }}>
                        <Typography variant="span">S</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>How to feel normal?</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#DD155F",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#667279" }}>
                        <Typography variant="span">S</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#C9C1CA" }}>
                        <Typography variant="span">G</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "#DCD9DE",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>Tell me about your recent dream</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#9A5F44",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#594257" }}>
                        <Typography variant="span">K</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#345F74" }}>
                        <Typography variant="span">L</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#7383C0" }}>
                        <Typography variant="span">R</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>
                      A thread in which you tell your users to go to sleep
                    </Typography>
                    <Box style={{ display: "flex", gap: "10px" }}>
                      <Paper
                        style={{
                          backgroundColor: "#8881B8",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        dreams
                      </Paper>
                      <Paper
                        style={{
                          backgroundColor: "#EFAB33",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        life
                      </Paper>
                      <Paper
                        style={{
                          backgroundColor: "#4792BE",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        reason
                      </Paper>
                      <Paper
                        style={{
                          backgroundColor: "#4B8A9B",
                          padding: "3px",
                          color: "white",
                        }}
                      >
                        social
                      </Paper>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "12px",
                    }}
                  >
                    <Typography>Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#D4AFCD",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#FB8249" }}>
                        <Typography variant="span">J</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#76D3D6" }}>
                        <Typography variant="span">D</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#4B234D" }}>
                        <Typography variant="span">Q</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "#DCD9DE",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>What's everyone listening?</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography> Mental Health</Typography>
                    <Category
                      style={{
                        backgroundColor: "#DE9B67",
                      }}
                    ></Category>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Users style={{ backgroundColor: "#238484" }}>
                        <Typography variant="span">B</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#D4AFCD" }}>
                        <Typography variant="span">M</Typography>
                      </Users>
                      <Users style={{ backgroundColor: "#83A5A2" }}>
                        <Typography variant="span">Z</Typography>
                      </Users>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">31</TableCell>
                  <TableCell align="right">41.5k</TableCell>
                  <TableCell align="right">13m</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default Topics;
