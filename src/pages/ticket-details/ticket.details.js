import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import TicketService from "../../services/ticket.service";
import { TicketDetailsCard } from "./components/ticket.details.card";
import { UserDetailsCard } from "./components/user.details.card";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { URL_CONSTANTS } from "../../constants/url.constants";
import UserService from "../../services/user.service";
import { TicketActionsCard } from "./components/ticket.actions";
import { HasPermission } from "../../components/HasPermission/HasPermission";

const MainTemplate = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState({});
  const [user, setUser] = useState({});
  const [loggedUser, setLoggedUser] = useState({});
  const [reloadCount, setReloadCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const storedUser = localStorage.getItem("user");
      const loggedUserData = JSON.parse(storedUser);
      const ticket = await TicketService.findOneTicket(
        ticketId,
        loggedUserData.access_token
      );
      const requesterInfos = await UserService.findOneUser(ticket.userId);

      setUser(requesterInfos);
      setTicket(ticket);
      setLoggedUser(loggedUserData.user);
    })();
  }, [reloadCount]);

  const handleOnClickNavigateButton = () => {
    return navigate(URL_CONSTANTS.HOME);
  };

  const reloadPage = () => {
    setReloadCount(reloadCount + 1);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                display="flex"
                alignItems="center"
                alignContent="center"
                paddingTop="20px"
              >
                <Grid item xs={2}>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "50%", width: "65px", height: "65px" }}
                    onClick={handleOnClickNavigateButton}
                  >
                    <NavigateBeforeIcon variant="filled" fontSize="large" />
                  </Button>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h4">Ticket Details </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <UserDetailsCard
                name={user.name}
                document={user.document}
                type={user.type}
                email={user.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TicketDetailsCard
                ticketId={ticket._id}
                title={ticket.title}
                description={ticket.description}
                status={ticket.status}
                deviceId={ticket.deviceId}
                situation={ticket.situation}
                type={ticket.type}
                comments={ticket.comments}
                reloadPage={reloadPage}
              />
            </Grid>
            <Grid item xs={12}>
              <HasPermission user={loggedUser}>
                <TicketActionsCard ticketId={ticket._id} />
              </HasPermission>
            </Grid>
          </Grid>
          <Box></Box>
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
};
export default MainTemplate;
