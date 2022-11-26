import { CheckCircle } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TicketCard from "../../components/Card/Card";
import SideBar from "../../components/Side-Bar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import TicketService from "../../services/ticket.service";

function MainTemplate() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    (async () => {
      const storedUser = localStorage.getItem("user");
      const loggedUserData = JSON.parse(storedUser);
      const receivedTickets = await TicketService.getTickets(
        loggedUserData.user._id,
        loggedUserData.access_token
      );
      setTickets(receivedTickets);
    })();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={7}>
          <TopBar />
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket._id}
              title={ticket.title}
              description={ticket.description}
              comments={ticket.comments}
              situation={ticket.situation}
              deviceId={ticket.deviceId}
              id={ticket._id}
              status={ticket.status}
            />
          ))}
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined" sx={{ marginTop: "80px" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Recent Activity
              </Typography>
              <Box display="flex" flexDirection="row">
                <CheckCircle />
                <Typography sx={{ marginLeft: "5px" }}>
                  Someone complete task
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
export default MainTemplate;
