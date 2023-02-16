import * as React from "react";
import { Card, CardContent, Chip, Typography, Box, Badge, Grid } from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { URL_CONSTANTS } from "../../constants/url.constants";

const props = {
  ticketNumber: String,
  description: String,
  title: String,
  situation: String,
  status: String,
  deviceId: String,
  comments: Array,
  handleOnClick: Function,
};

const TicketCard = ({
  ticketNumber,
  description,
  title,
  situation,
  status,
  deviceId,
  comments,
  _id: id,
} = props) => {
  const navigate = useNavigate();

  const handleOnClick = (ticketId) => {
    return navigate(
      URL_CONSTANTS.TICKET_DETAILS.replace(":ticketId", ticketId)
    );
  };

  const getChipSituationCollor = (situation) => {
    const collorSituationMapper = {
      URGENT: "error",
      NORMAL: "success",
    };
    const upperSituation = situation.toUpperCase();
    return collorSituationMapper[upperSituation];
  };

  const getChipStatusCollor = (status) => {
    const collorStatusMapper = {
      CANCELED: 'error',
      FINISHED: 'primary',
      PENDING: 'success',
    }

    return collorStatusMapper[status];
  }

  return (
    <Card
      sx={{ minWidth: 275, marginTop: "20px" }}
      onClick={() => handleOnClick(id)}
    >
      <CardContent>
        <Grid container> 
          <Grid item xs={9.5}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
          <Typography variant="h6" color='text.secondary' sx={{ fontWeight: "bold" }}>
            {ticketNumber}
          </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ marginTop: "15px", color: "#666666" }}>
          {description}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          marginTop="15px"
        >
          <Chip label={situation} color={getChipSituationCollor(situation)} sx={{ marginRight: "10px" }} />
          <Chip label={deviceId} sx={{ marginRight: "10px" }} />
          <Chip label={status} color={getChipStatusCollor(status)} variant='outlined' sx={{ marginRight: "10px" }} />
          <Badge badgeContent={comments ? comments.length : 0} color="error">
            <ChatBubbleOutline />
          </Badge>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
