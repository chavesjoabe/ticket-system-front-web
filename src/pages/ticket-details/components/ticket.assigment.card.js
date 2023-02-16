import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
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

export const TicketAssignmentCard = ({ attendants, ticket, setTicket }) => {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOnChangeAttendant = (event) => {
    console.log('ATTENDANT ', event.target.value);
    setTicket({ ...ticket, attendantId: event.target.value});
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
              Assign to:
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
              <form>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Assign to"
                    sx={{ width: "100%", marginBottom: "10px" }}
                    variant="filled"
                    defaultValue=""
                    required
                    onChange={handleOnChangeAttendant}
                  >
                    {attendants.map((attendant) => (
                      <MenuItem value={attendant.document}>
                        {attendant.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <Box
                    marginTop="5px"
                    display="flex"
                    justifyContent="flex-end"
                    gap="10px"
                  ></Box>
                </FormControl>
              </form>
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
