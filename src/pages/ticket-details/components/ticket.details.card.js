import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import ticketService from "../../../services/ticket.service";
import useAuth from "../../../hooks/useAuth";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const TicketDetailsCard = ({
  ticketId,
  title,
  description,
  type,
  status,
  deviceId,
  situation,
  comments,
  reloadPage,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const [subject, setSubject] = React.useState("");
  const [commentMessage, setCommentMessage] = React.useState("");
  const [comment, setComment] = React.useState({});
  const [severity, setSeverity] = React.useState("success");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const { user: data } = useAuth();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOnChangeCommentField = (event) => {
    setCommentMessage(event.target.value);
    register("comment");
  };

  const handleOnChangeSubjectField = (event) => {
    setSubject(event.target.value);
    register("subject");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOnSubmit = async (event) => {
    let loggedUserData = data.user;
    if(!loggedUserData) {
      loggedUserData = localStorage.getItem('user');
    }

    setComment({
      comment: commentMessage,
      loggedUserName: loggedUserData.name,
      subject: subject,
    });
    try {
      await ticketService.insertComment(ticketId, comment, data.access_token);

      setOpen(true);
      setMessage("Comment inserted with success");
      setCommentMessage("");
      setSubject("");
      reloadPage();
    } catch (error) {
      setOpen(true);
      setSeverity('error');
      setMessage(error.message);
    }
  };

  const handleOnPressCancel = () => {
    setCommentMessage("");
    setSubject("");
  };

  const getAvatarInitials = (name) => {
    const nameArr = name.split(" "); // [Joabe, Chaves]
    const nameInitials = nameArr.map((item) => item.split("")[0]); // [J,C]
    return `${nameInitials[0]}${nameInitials[1]}`.toUpperCase(); // JC
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
              Ticket Details
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
                label="title"
                value={title}
                variant="filled"
                sx={{ width: "100%" }}
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="filled-basic"
                label="status"
                value={status}
                variant="filled"
                sx={{ width: "100%" }}
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="filled-basic"
                label="type"
                value={type}
                variant="filled"
                sx={{ width: "100%" }}
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="filled-basic"
                label="device ID"
                value={deviceId}
                variant="filled"
                sx={{ width: "100%" }}
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="filled-basic"
                label="situation"
                value={situation}
                variant="filled"
                sx={{ width: "100%" }}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="filled-basic"
                label="description"
                value={description}
                variant="filled"
                multiline
                sx={{ width: "100%" }}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" color="text.secondary">
                Comments
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  maxHeight: "250px",
                  overflow: "auto",
                }}
              >
                {comments
                  ? comments.map((comment) => (
                      <>
                        <ListItem
                          alignItems="flex-start"
                          sx={{ width: "100%" }}
                        >
                          <ListItemAvatar>
                            <Avatar>
                              {getAvatarInitials(comment.loggedUserName)}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={comment.loggedUserName}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {`${comment.subject} - `}
                                </Typography>
                                {comment.comment}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </>
                    ))
                  : ""}
              </List>
            </Grid>
            <Grid item xs={8}>
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Subject"
                    sx={{ width: "100%", marginBottom: "10px" }}
                    variant="filled"
                    value={subject}
                    required
                    onChange={handleOnChangeSubjectField}
                  >
                    <MenuItem value={"Information"}>Information</MenuItem>
                    <MenuItem value={"New behavior"}>New behavior</MenuItem>
                    <MenuItem value={"Complement"}>Complement</MenuItem>
                  </Select>
                  <TextField
                    id="filled-basic"
                    label="Comment"
                    rows={10}
                    value={commentMessage}
                    variant="filled"
                    sx={{ width: "100%" }}
                    multiline
                    onChange={handleOnChangeCommentField}
                  />
                  <Box
                    marginTop="5px"
                    display="flex"
                    justifyContent="flex-end"
                    gap="10px"
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      color="error"
                      onClick={handleOnPressCancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      onClick={handleOnSubmit}
                    >
                      Comment
                    </Button>
                  </Box>
                </FormControl>
              </form>
            </Grid>
          </Grid>
        </Collapse>
      </CardContent>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Card>
  );
};
