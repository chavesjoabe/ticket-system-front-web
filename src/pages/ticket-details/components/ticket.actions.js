import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import ticketService from "../../../services/ticket.service";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { URL_CONSTANTS } from "../../../constants/url.constants";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const TicketActionsCard = ({ ticketId }) => {
  const [expanded, setExpanded] = useState(true);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const { user: data } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleOnChangeStatusField = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleOnPressCancel = () => {
    return navigate(URL_CONSTANTS.HOME);
  };

  const handleOnSubmit = async () => {
    try {
      const requestBody = { status: selectedStatus };
      await ticketService.resolveTicket(
        ticketId,
        requestBody,
        data.access_token
      );
      setOpen(true);
      setMessage("Ticket marked as RESOLVED");
      return navigate(URL_CONSTANTS.HOME);
    } catch (error) {
      setOpen(true);
      setSeverity("error");
      setMessage(error.message);
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              variant="h5"
              alignItems="center"
              color="text.secondary"
              marginTop="15px"
            >
              Ticket Actions
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon sx={{ fontSize: 35 }} />
              </ExpandMore>
            </CardActions>
          </Grid>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    sx={{ width: "100%", marginBottom: "10px" }}
                    variant="filled"
                    defaultValue=""
                    required
                    onChange={handleOnChangeStatusField}
                  >
                    <MenuItem value={"CANCELED"}>Canceled</MenuItem>
                    <MenuItem value={"FINISHED"}>Finished</MenuItem>
                  </Select>
                  <Box
                    marginTop="5px"
                    display="flex"
                    justifyContent="flex-end"
                    gap="10px"
                  >
                    <Button variant="outlined" size="large" color="error" onClick={handleOnPressCancel}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="contained" size="large">
                      Finalize
                    </Button>
                  </Box>
                </FormControl>
              </form>
            </Grid>
          </Grid>
        </Collapse>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Card>
  );
};
