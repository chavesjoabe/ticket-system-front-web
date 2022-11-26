import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import LoginCard from '../../components/LoginCard/LoginCard';

function LoginTemplate() {
    return (
        <Box width="100%" margin="0px" height="100vh" boxSizing="border-box">
            <Grid container height="100%">
                <Grid item xs={6}>
                    <Box
                        backgroundColor="#2F69CC"
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h4" color="white">
                            Here is a logo
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <LoginCard />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoginTemplate;
