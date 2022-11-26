import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, TextField } from "@mui/material";

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

export const UserDetailsCard = ({
  name,
  email,
  document,
  type,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              variant="h5"
              alignItems="center"
              color="text.secondary"
              marginTop="15px"
            >
              Requester Informations
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
            <Grid item xs={8}>
              <TextField
                id="filled-basic"
                label="name"
                value={name ? name.toUpperCase() : ''}
                variant="filled"
                sx={{width: '100%'}}
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="filled-basic"
                label="document"
                value={document}
                variant="filled"
                sx={{width: '100%'}}
                disabled
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="filled-basic"
                label="email"
                value={email ? email.toUpperCase() : ''}
                variant="filled"
                sx={{width: '100%'}}
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="filled-basic"
                label="type"
                value={type ? type.toUpperCase() : ''}
                variant="filled"
                sx={{width: '100%'}}
                disabled
              />
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
