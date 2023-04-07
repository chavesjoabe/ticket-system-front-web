import { Keyboard } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import LoginCard from "../../components/LoginCard/LoginCard";

function LoginTemplate() {
  return (
    <Box width="100%" margin="0px" height="100vh" boxSizing="border-box">
      <Grid container height="100%">
        <Grid item xs={6}>
          <Box
            backgroundColor="#2F69CC"
            height="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <Keyboard sx={{ color: "#fff", fontSize: 50 }} />
            <Typography color="#fff" variant="h3" fontWeight={600}>
              Help
            </Typography>
            <Typography
              sx={{
                WebkitTextStroke: "0.7px #fff",
                color: "#2F69CC",
              }}
              variant="h3"
              fontWeight={600}
            >
              Desk
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <LoginCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginTemplate;
