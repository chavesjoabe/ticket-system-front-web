import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
  Snackbar,
  Alert,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/login.service";
import useAuth from "../../hooks/useAuth";
import { URL_CONSTANTS } from "../../constants/url.constants";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginCard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const authContext = useAuth();
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = async () => {
    const loggedUser = await loginService.login(user);
    if (loggedUser && loggedUser.access_token) {
      localStorage.setItem("user", JSON.stringify(loggedUser));
      authContext.setUser(loggedUser);
      authContext.setToken(loggedUser.auth_token);
      navigate(URL_CONSTANTS.HOME);
      return;
    }

    setMessage(loggedUser.message);
    setOpen(true);
    return;
  };

  const handleOnChangeDocument = (event) => {
    setUser({ ...user, document: event.target.value });
    register("document");
  };

  const handleOnChangePassword = (event) => {
    setUser({ ...user, password: event.target.value });
    register("password");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setUser({
      ...user,
      showPassword: !user.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card sx={{ width: "80%" }}>
      <CardContent>
        <Typography variant="h4">Login Form</Typography>
        <Typography>We are here to help you!</Typography>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <TextField
            id="outlined-read-only-input"
            label="document"
            placeholder="document"
            variant="outlined"
            type="number"
            sx={{ marginTop: "25px", width: "100%" }}
            onChange={handleOnChangeDocument}
            required
          />

          <OutlinedInput
            id="outlined-adornment-password"
            type={user.showPassword ? "text" : "password"}
            label="password"
            placeholder="password"
            sx={{ marginTop: "25px", width: "100%" }}
            onChange={handleOnChangePassword}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {user.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ width: "100%", marginTop: "15px" }}
            onClick={handleOnSubmit}
          >
            Login
          </Button>
        </form>
        <Typography marginTop="20px">
          Don't have an account? register <Link>Here</Link>
        </Typography>
      </CardContent>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default LoginCard;
