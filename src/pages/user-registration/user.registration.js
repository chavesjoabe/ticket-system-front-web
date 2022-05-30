import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import UserRegistrationCard from "../../components/UserRegistrationCard/UserRegistrationCard";

function UserRegistration() {
  return (
    <Box width="100%" margin="0px" height="100vh" boxSizing="border-box">
      <Grid container spacing={1} height="100%">
        <Grid item xs={6}>
          <Box
            backgroundColor="#2F69CC"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h4" color="white">
              Here is a logo
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
            <UserRegistrationCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserRegistration;
