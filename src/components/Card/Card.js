import * as React from "react";
import { Card, CardContent, Chip, Typography, Box, Badge } from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { URL_CONSTANTS } from "../../constants/url.constants";

const props = {
  description: String,
  title: String,
  situation: String,
  status: String,
  deviceId: String,
  comments: Array,
  handleOnClick: Function,
};

const TicketCard = ({
  description,
  title,
  situation,
  status,
  deviceId,
  comments,
  id,
} = props) => {
  const navigate = useNavigate();

  const handleOnClick = (ticketId) => {
    return navigate(URL_CONSTANTS.TICKET_DETAILS.replace(':ticketId', ticketId));
  };

  return (
    <Card
      sx={{ minWidth: 275, marginTop: "20px" }}
      onClick={() => handleOnClick(id)}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography sx={{ marginTop: "15px", color: "#666666" }}>
          {description}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          marginTop="15px"
        >
          <Chip label={situation} color="error" sx={{ marginRight: "10px" }} />
          <Chip label={deviceId} sx={{ marginRight: "10px" }} />
          <Chip label={status} sx={{ marginRight: "10px" }} />
          <Badge badgeContent={comments ? comments.length : 0} color="error">
            <ChatBubbleOutline />
          </Badge>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
