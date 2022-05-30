import {
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MESSAGE_CONSTANTS } from "../../constants/message.constants";
import { URL_CONSTANTS } from "../../constants/url.constants";
import useAuth from "../../hooks/useAuth";
import loginService from "../../services/login.service";

function LoginCard() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState({});
  const authContext = useAuth();

  const handleOnClick = async () => {
    const loggedUser = await loginService.login(user);
    if (loggedUser && loggedUser.access_token) {
      localStorage.setItem("user", loggedUser);
      authContext.setUser(loggedUser);
      authContext.setToken(loggedUser.auth_token);
      navigate(URL_CONSTANTS.HOME);
      enqueueSnackbar(MESSAGE_CONSTANTS.LOGIN.USER_LOGGED_WITH_SUCCESS, {
        variant: "success",
      });
      return;
    }

    enqueueSnackbar(
      MESSAGE_CONSTANTS.LOGIN.ERROR_ON_LOGIN(loggedUser.message),
      { variant: "error" }
    );
    return;
  };
  const handleOnChangeDocument = (event) => {
    setUser({ ...user, document: event.target.value });
  };
  const handleOnChangePassword = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handleOnClickRegister = () => {
    navigate(URL_CONSTANTS.USER_REGISTRATION);
    return;
  };

  return (
    <Card sx={{ width: "80%" }}>
      <CardContent>
        <Typography variant="h4">Login Form</Typography>
        <Typography>We are here to help you!</Typography>
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
          onClick={handleOnClick}
        >
          Login
        </Button>

        <Typography marginTop="20px">
          Don't have an account? register{" "}
          <Link onClick={handleOnClickRegister}>Here</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LoginCard;
