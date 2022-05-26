import * as React from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginCard() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/home');
    };
    return (
        <Card sx={{ width: '80%' }}>
            <CardContent>
                <Typography variant="h4">Login Form</Typography>
                <Typography>We are here to help you!</Typography>
                <TextField
                    id="outlined-read-only-input"
                    label="email"
                    defaultValue="email"
                    variant="outlined"
                    sx={{ marginTop: '25px', width: '100%' }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="password"
                    defaultValue="password"
                    variant="outlined"
                    sx={{ marginTop: '25px', width: '100%' }}
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
        </Card>
    );
}

export default LoginCard;
