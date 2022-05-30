import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_CONSTANTS } from "../../constants/url.constants";
import userService from "../../services/user.service";

function UserRegistrationCard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSubmit = async () => {
    const createdUser = await userService.createUser({
      ...user,
      type: "SIMPLE",
    });

    if (createdUser && createdUser._id) {
      navigate(URL_CONSTANTS.LOGIN);
      enqueueSnackbar("User created with success", { variant: "sucess" });
      return;
    }
    enqueueSnackbar("Error on create User", { variant: "error" });
  };
  const handleOnChangeName = (event) => {
    setUser({ ...user, name: event.target.value });
  };
  const handleOnChangeEmail = (event) => {
    setUser({ ...user, email: event.target.value });
  };
  const handleOnChangeDocument = (event) => {
    setUser({ ...user, document: event.target.value });
  };
  const handleOnChangePassword = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handleOnCancel = () => {
    navigate(URL_CONSTANTS.LOGIN);
  };

  return (
    <Card sx={{ width: "80%" }}>
      <CardContent>
        <Typography variant="h4">Your informations</Typography>
        <Typography>We are here to help you!</Typography>
        <TextField
          id="outlined-read-only-input"
          label="name"
          placeholder="name"
          variant="outlined"
          sx={{ marginTop: "25px", width: "100%" }}
          onChange={handleOnChangeName}
        />
        <TextField
          id="outlined-read-only-input"
          label="email"
          placeholder="email"
          variant="outlined"
          sx={{ marginTop: "25px", width: "100%" }}
          onChange={handleOnChangeEmail}
        />
        <TextField
          id="outlined-read-only-input"
          label="document"
          placeholder="document"
          variant="outlined"
          sx={{ marginTop: "25px", width: "100%" }}
          onChange={handleOnChangeDocument}
        />
        <TextField
          id="outlined-read-only-input"
          label="password"
          placeholder="password"
          variant="outlined"
          sx={{ marginTop: "25px", width: "100%" }}
          onChange={handleOnChangePassword}
        />
        <Button
          variant="contained"
          size="large"
          sx={{ width: "100%", marginTop: "15px" }}
          onClick={handleOnSubmit}
        >
          CREATE
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "100%", marginTop: "15px" }}
          onClick={handleOnCancel}
          color="error"
        >
          Cancel
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserRegistrationCard;
