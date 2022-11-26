import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { URL_CONSTANTS } from "../../constants/url.constants";

const TopBar = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(URL_CONSTANTS.TICKET_REGISTRATION);
  };
  return (
    <>
      <Box
        widh="100%"
        height="80px"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="20px"
        paddingRight="20px"
      >
        <Typography variant="h5" sx={{ fontSize: "30px" }}>
          Tickets
        </Typography>
        <Button variant="contained" size="medium" onClick={handleOnClick}>
          New Ticket
        </Button>
      </Box>
      <Divider />
    </>
  );
};

export default TopBar;
