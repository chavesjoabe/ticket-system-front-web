import * as React from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Link,
    Snackbar,
    Alert,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../../services/login.service';
import useAuth from '../../hooks/useAuth';
import { URL_CONSTANTS } from '../../constants/url.constants';
function LoginCard() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const authContext = useAuth();
    const handleOnClick = async () => {
        const loggedUser = await loginService.login(user);
        if (loggedUser && loggedUser.access_token) {
            localStorage.setItem('user', loggedUser);
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
    };
    const handleOnChangePassword = (event) => {
        setUser({ ...user, password: event.target.value });
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Card sx={{ width: '80%' }}>
            <CardContent>
                <Typography variant="h4">Login Form</Typography>
                <Typography>We are here to help you!</Typography>
                <TextField
                    id="outlined-read-only-input"
                    label="document"
                    placeholder="document"
                    variant="outlined"
                    sx={{ marginTop: '25px', width: '100%' }}
                    onChange={handleOnChangeDocument}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="password"
                    placeholder="password"
                    variant="outlined"
                    sx={{ marginTop: '25px', width: '100%' }}
                    onChange={handleOnChangePassword}
                />
                <Button
                    variant="contained"
                    size="large"
                    sx={{ width: '100%', marginTop: '15px' }}
                    onClick={handleOnClick}
                >
                    Login
                </Button>

                <Typography marginTop="20px">
                    Don't have an account? register <Link>Here</Link>
                </Typography>
            </CardContent>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Card>
    );
}

export default LoginCard;
