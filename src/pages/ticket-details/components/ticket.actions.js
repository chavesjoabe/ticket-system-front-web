import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export const TicketActionsCard = ({ ticket, setTicket }) => {
  const [expanded, setExpanded] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleOnChangeStatusField = (event) => {
    setSelectedStatus(event.target.value);
    setTicket({ ...ticket, status: event.target.value});

    console.log('TICKET ', ticket);
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
              <Select
                id="demo-simple-select"
                label="Status"
                placeholder="Status"
                sx={{ width: "100%", marginBottom: "10px" }}
                variant="filled"
                required
                onChange={handleOnChangeStatusField}
              >
                <MenuItem value={"CANCELED"}>Canceled</MenuItem>
                <MenuItem value={"FINISHED"}>Finished</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Collapse>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};
